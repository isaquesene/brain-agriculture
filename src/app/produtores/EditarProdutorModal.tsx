import { useEffect, useState } from "react";
import { useUpdateProdutorMutation } from "@/state/api";
import Header from "@/app/(components)/Header";

interface EditProdutorModalProps {
  isOpen: boolean;
  onClose: () => void;
  produtor: any;
}

const EditProdutorModal = ({ isOpen, onClose, produtor }: EditProdutorModalProps) => {
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [nomeFazenda, setNomeFazenda] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [areaTotal, setAreaTotal] = useState("");
  const [areaAgricultavel, setAreaAgricultavel] = useState("");
  const [areaVegetacao, setAreaVegetacao] = useState("");
  const [culturas, setCulturas] = useState("");

  const [updateProdutor] = useUpdateProdutorMutation();

  useEffect(() => {
    if (produtor) {
      setNome(produtor.nome);
      setCpf(produtor.cpf || "");
      setCnpj(produtor.cnpj || "");
      setNomeFazenda(produtor.nomeFazenda);
      setCidade(produtor.cidade);
      setEstado(produtor.estado);
      setAreaTotal(produtor.areaTotal.toString());
      setAreaAgricultavel(produtor.areaAgricultavel.toString());
      setAreaVegetacao(produtor.areaVegetacao.toString());
      setCulturas(produtor.culturas.join(", "));
    }
  }, [produtor, isOpen]);

  const handleSave = async () => {
    const produtorData = {
      nome,
      cpf,
      cnpj,
      nomeFazenda,
      cidade,
      estado,
      areaTotal: parseFloat(areaTotal),
      areaAgricultavel: parseFloat(areaAgricultavel),
      areaVegetacao: parseFloat(areaVegetacao),
      culturas: culturas.split(",").map(cultura => cultura.trim()),
    };

    try {
      await updateProdutor({ id: produtor.produtorId, data: produtorData });
      onClose();
    } catch (error) {
      console.error("Erro ao atualizar o produtor:", error);
    }
  };

const labelCssStyles = "block text-sm font-medium text-gray-700";
const inputCssStyles = "mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm";

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-20">
        <div className="relative top-20 mx-auto p-5 border w-11/12 md:w-2/3 lg:w-1/2 shadow-lg rounded-md bg-white">
            <Header nome="Editar Produtor" />
            <form onSubmit={handleSave} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label htmlFor="nome" className={labelCssStyles}>Nome</label>
                    <input
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        className={inputCssStyles}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="cpf" className={labelCssStyles}>CPF</label>
                    <input
                        value={cpf}
                        onChange={(e) => setCpf(e.target.value)}
                        className={inputCssStyles}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="cnpj" className={labelCssStyles}>CNPJ</label>
                    <input
                        value={cnpj}
                        onChange={(e) => setCnpj(e.target.value)}
                        className={inputCssStyles}
                    />
                </div>
                <div>
                    <label htmlFor="nomeFazenda" className={labelCssStyles}>Nome da Fazenda</label>
                    <input
                        value={nomeFazenda}
                        onChange={(e) => setNomeFazenda(e.target.value)}
                        className={inputCssStyles}
                    />
                </div>
                <div>
                    <label htmlFor="cidade" className={labelCssStyles}>Cidade</label>
                    <input
                        value={cidade}
                        onChange={(e) => setCidade(e.target.value)}
                        className={inputCssStyles}
                    />
                </div>
                <div>
                    <label htmlFor="estado" className={labelCssStyles}>Estado</label>
                    <input
                        value={estado}
                        onChange={(e) => setEstado(e.target.value)}
                        className={inputCssStyles}
                    />
                </div>
                <div>
                    <label htmlFor="areaTotal" className={labelCssStyles}>Área Total (ha)</label>
                    <input
                        value={areaTotal}
                        onChange={(e) => setAreaTotal(e.target.value)}
                        className={inputCssStyles}
                    />
                </div>
                <div>
                    <label htmlFor="areaAgricultavel" className={labelCssStyles}>Área Agricultável (ha)</label>
                    <input
                        value={areaAgricultavel}
                        onChange={(e) => setAreaAgricultavel(e.target.value)}
                        className={inputCssStyles}
                    />
                </div>
                <div>
                    <label htmlFor="areaVegetacao" className={labelCssStyles}>Área Vegetação (ha)</label>
                    <input
                        value={areaVegetacao}
                        onChange={(e) => setAreaVegetacao(e.target.value)}
                        className={inputCssStyles}
                    />
                </div>
                <div>
                    <label htmlFor="culturas" className={labelCssStyles}>Culturas</label>
                    <input
                        value={culturas}
                        onChange={(e) => setCulturas(e.target.value)}
                        className={inputCssStyles}
                    />
                </div>

                <div className="col-span-2 flex justify-end">
                    <button
                        type="submit"
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
                    >
                        Editar Produtor
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

export default EditProdutorModal;
