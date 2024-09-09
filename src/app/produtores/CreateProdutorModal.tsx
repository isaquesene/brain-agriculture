import React, { ChangeEvent, FormEvent, useState } from "react";
import { v4 } from "uuid";
import Header from "@/app/(components)/Header";

// Função para formatar CPF
const formatCpf = (cpf: string) => {
    cpf = cpf.replace(/\D/g, '');
    return cpf.length <= 11
        ? cpf.replace(/(\d{3})(\d)/, "$1.$2")
            .replace(/(\d{3})(\d)/, "$1.$2")
            .replace(/(\d{3})(\d{1,2})$/, "$1-$2")
        : cpf;
};

// Função para formatar CNPJ
const formatCnpj = (cnpj: string) => {
    cnpj = cnpj.replace(/\D/g, '');
    return cnpj.length <= 14
        ? cnpj.replace(/^(\d{2})(\d)/, "$1.$2")
            .replace(/\.(\d{3})(\d)/, ".$1/$2")
            .replace(/(\/\d{4})(\d)/, "$1-$2")
        : cnpj;
};

// Função para validar CPF
const isValidCpf = (cpf: string) => {
    cpf = cpf.replace(/[^\d]+/g, '');
    if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) return false;

    let sum = 0, remainder;
    for (let i = 1; i <= 9; i++) {
        sum += parseInt(cpf.substring(i - 1, i)) * (11 - i);
    }
    remainder = (sum * 10) % 11;
    if (remainder === 10 || remainder === 11) remainder = 0;
    if (remainder !== parseInt(cpf.substring(9, 10))) return false;

    sum = 0;
    for (let i = 1; i <= 10; i++) {
        sum += parseInt(cpf.substring(i - 1, i)) * (12 - i);
    }
    remainder = (sum * 10) % 11;
    if (remainder === 10 || remainder === 11) remainder = 0;
    return remainder === parseInt(cpf.substring(10, 11));
};

// Função para validar CNPJ
const isValidCnpj = (cnpj: string) => {
    cnpj = cnpj.replace(/[^\d]+/g, '');
    if (cnpj.length !== 14 || /^(\d)\1+$/.test(cnpj)) return false; 

    let length = cnpj.length - 2;
    let numbers = cnpj.substring(0, length);
    const digits = cnpj.substring(length);
    let sum = 0;
    let pos = length - 7;
    
    for (let i = length; i >= 1; i--) {
        sum += parseInt(numbers.charAt(length - i)) * pos--;
        if (pos < 2) pos = 9;
    }
    
    let result = sum % 11 < 2 ? 0 : 11 - sum % 11;
    if (result !== parseInt(digits.charAt(0))) return false;
    
    length++;
    numbers = cnpj.substring(0, length);
    sum = 0;
    pos = length - 7;
    
    for (let i = length; i >= 1; i--) {
        sum += parseInt(numbers.charAt(length - i)) * pos--;
        if (pos < 2) pos = 9;
    }
    
    result = sum % 11 < 2 ? 0 : 11 - sum % 11;
    return result === parseInt(digits.charAt(1));
};

// Tipo dos dados do formulário
type ProdutorFormData = {
    nome: string;
    cpf: string;
    cnpj: string;
    nomeFazenda: string;
    cidade: string;
    estado: string;
    areaTotal: number;
    areaAgricultavel: number;
    areaVegetacao: number;
    culturas: string[];
};

// Props do modal de criação de produtor
type CreateProdutorModalProps = {
    isOpen: boolean;
    onClose: () => void;
    onCreate: (formData: ProdutorFormData) => void;
};

const CreateProdutorModal = ({
    isOpen,
    onClose,
    onCreate,
}: CreateProdutorModalProps) => {
    const [formData, setFormData] = useState({
        produtorId: v4(),
        nome: "",
        cpf: "",
        cnpj: "",
        nomeFazenda: "",
        cidade: "",
        estado: "",
        areaTotal: 0,
        areaAgricultavel: 0,
        areaVegetacao: 0,
        culturas: [],
    });

    const handleCulturasChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        const culturasArray = value.split(",").map(cultura => cultura.trim()).filter(cultura => cultura.length > 0);
        setFormData({
            ...formData,
            culturas: culturasArray,
        });
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        // Validação e formatação para CPF e CNPJ
        if (name === "cpf") {
            setFormData({
                ...formData,
                cpf: formatCpf(value),
            });
        } else if (name === "cnpj") {
            setFormData({
                ...formData,
                cnpj: formatCnpj(value),
            });
        }
        // Tratamento das áreas
        else if (name === "areaAgricultavel" || name === "areaVegetacao") {
            const newValue = parseFloat(value) || 0;
            setFormData((prevData) => {
                const updatedData = {
                    ...prevData,
                    [name]: newValue,
                    areaTotal:
                        prevData.areaAgricultavel +
                        prevData.areaVegetacao +
                        (name === "areaAgricultavel"
                            ? newValue - prevData.areaAgricultavel
                            : newValue - prevData.areaVegetacao),
                };

                if (
                    updatedData.areaAgricultavel + updatedData.areaVegetacao >
                    updatedData.areaTotal
                ) {
                    alert(
                        "A soma da área agricultável e vegetação não pode ser maior que a área total."
                    );
                    return prevData;
                }

                return updatedData;
            });
        } else {
            setFormData({
                ...formData,
                [name]: value,
            });
        }
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    
        const somaAreas = formData.areaAgricultavel + formData.areaVegetacao;
        if (somaAreas > formData.areaTotal) {
            alert(
                "A soma da área agricultável e vegetação não pode ser maior que a área total."
            );
            return;
        }
    
        // Validação do CPF
        if (!isValidCpf(formData.cpf)) {
            alert("CPF inválido!");
            return;
        }
    
        // Validação do CNPJ (se for preenchido)
        if (formData.cnpj && !isValidCnpj(formData.cnpj)) {
            alert("CNPJ inválido!");
            return;
        }
    
        onCreate(formData);
        onClose();
    };
    

    if (!isOpen) return null;

    const labelCssStyles = "block text-sm font-medium text-gray-700";
    const inputCssStyles = "mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm";

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-20">
            <div className="relative top-20 mx-auto p-5 border w-11/12 md:w-2/3 lg:w-1/2 shadow-lg rounded-md bg-white">
                <Header nome="Criar Produtor" />
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="nome" className={labelCssStyles}>Nome</label>
                        <input
                            type="text"
                            name="nome"
                            placeholder="Nome completo"
                            onChange={handleChange}
                            value={formData.nome}
                            className={inputCssStyles}
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="cpf" className={labelCssStyles}>CPF (Não pode ser um CPF repetido)</label>
                        <input
                            type="text"
                            name="cpf"
                            placeholder="CPF"
                            onChange={handleChange}
                            value={formData.cpf}
                            className={inputCssStyles}
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="cnpj" className={labelCssStyles}>CNPJ (Não pode ser um CNPJ repetido)</label>
                        <input
                            type="text"
                            name="cnpj"
                            placeholder="CNPJ"
                            onChange={handleChange}
                            value={formData.cnpj}
                            className={inputCssStyles}
                        />
                    </div>

                    <div>
                        <label htmlFor="nomeFazenda" className={labelCssStyles}>Nome da Fazenda</label>
                        <input
                            type="text"
                            name="nomeFazenda"
                            placeholder="Nome da fazenda"
                            onChange={handleChange}
                            value={formData.nomeFazenda}
                            className={inputCssStyles}
                        />
                    </div>

                    <div>
                        <label htmlFor="cidade" className={labelCssStyles}>Cidade</label>
                        <input
                            type="text"
                            name="cidade"
                            placeholder="Cidade"
                            onChange={handleChange}
                            value={formData.cidade}
                            className={inputCssStyles}
                        />
                    </div>

                    <div>
                        <label htmlFor="estado" className={labelCssStyles}>Estado</label>
                        <input
                            type="text"
                            name="estado"
                            placeholder="Estado"
                            onChange={handleChange}
                            value={formData.estado}
                            className={inputCssStyles}
                        />
                    </div>

                    <div>
                        <label htmlFor="areaAgricultavel" className={labelCssStyles}>
                            Área Agricultável (ha)
                        </label>
                        <input
                            type="number"
                            name="areaAgricultavel"
                            placeholder="Área agricultável"
                            onChange={handleChange}
                            value={formData.areaAgricultavel}
                            className={inputCssStyles}
                        />
                    </div>

                    <div>
                        <label htmlFor="areaVegetacao" className={labelCssStyles}>
                            Área Vegetação (ha)
                        </label>
                        <input
                            type="number"
                            name="areaVegetacao"
                            placeholder="Área Vegetação"
                            onChange={handleChange}
                            value={formData.areaVegetacao}
                            className={inputCssStyles}
                        />
                    </div>

                    <div>
                        <label htmlFor="areaTotal" className={labelCssStyles}>
                            Área Total (ha)
                        </label>
                        <input
                            type="number"
                            name="areaTotal"
                            placeholder="Área total"
                            value={formData.areaTotal}
                            className={inputCssStyles}
                            readOnly
                        />
                    </div>

                    <div>
                        <label htmlFor="culturas" className={labelCssStyles}>Culturas</label>
                        <input
                            type="text"
                            name="culturas"
                            placeholder="Culturas"
                            onChange={handleCulturasChange}
                            value={formData.culturas.join(", ")}
                            className={inputCssStyles}
                        />
                    </div>

                    <div className="col-span-2 flex justify-end">
                        <button
                            type="submit"
                            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
                        >
                            Criar Produtor
                        </button>
                        <button
                            onClick={onClose}
                            type="button"
                            className="ml-2 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-700"
                        >
                            Cancelar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateProdutorModal;
