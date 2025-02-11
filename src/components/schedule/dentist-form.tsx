import React from "react";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "motion/react";

// Esquema de validação com Zod atualizado
const schema = z.object({
  nome: z
    .string()
    .min(1, "O nome é obrigatório")
    .min(3, "O nome deve ter pelo menos 3 caracteres"),
  telefone: z
    .string()
    .regex(/^\d{10,11}$/, "O telefone deve ter 10 ou 11 dígitos")
    .min(1, "O telefone é obrigatório"),
  email: z
    .string()
    .email("Formato de email inválido")
    .min(1, "O email é obrigatório"),
  especialidade: z.enum(
    ["Ortodontia", "Endodontia", "Periodontia", "Implantodontia"],
    { required_error: "A especialidade é obrigatória" }
  ),
});

// Tipos derivados do esquema
type FormData = z.infer<typeof schema>;

const FormularioDentista: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  // Função de envio
  const onSubmit = (data: FormData) => {
    const mensagem = `
      Nome: ${data.nome}
      Telefone: ${data.telefone}
      Email: ${data.email}
      Especialidade: ${data.especialidade}
    `.trim();

    const whatsappNumber = "5581984027695";
    const mensagemCodificada = encodeURIComponent(mensagem);

    window.open(
      `https://wa.me/${whatsappNumber}?text=${mensagemCodificada}`,
      "_blank"
    );
  };

  return (
    <div className="max-w-md mx-auto sm:my-2 md:my-4 py-4 px-6 bg-white lg:right-10 xl:right-28 lg:absolute lg:top-1 xl:top-12 rounded-xl">
      <div>
        <h2 className="text-3xl text-emerald-500  font-bold mb-2">
          AGENDE SUA CONSULTA
        </h2>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Nome */}
        <div>
          <label className="block text-sm  text-emerald-500  font-medium">
            Nome
          </label>
          <Controller
            name="nome"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                className={`border p-2  w-full rounded focus:border-emerald-700 ${
                  errors.nome ? "border-red-500" : "border-emerald-300"
                }`}
                placeholder="Digite seu nome"
              />
            )}
          />
          <p className="text-red-500 text-sm">{errors.nome?.message}</p>
        </div>

        {/* Telefone */}
        <div>
          <label className="block text-sm  text-emerald-500  font-medium">
            Telefone
          </label>
          <Controller
            name="telefone"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                className={`border p-2 w-full rounded ${
                  errors.telefone ? "border-red-500" : "border-emerald-300"
                }`}
                placeholder="Digite seu telefone"
              />
            )}
          />
          <p className="text-red-500 text-sm">{errors.telefone?.message}</p>
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm  text-emerald-500  font-medium">
            Email
          </label>
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                className={`border p-2 w-full rounded ${
                  errors.email ? "border-red-500" : "border-emerald-300"
                }`}
                placeholder="Digite seu email"
              />
            )}
          />
          <p className="text-red-500 text-sm">{errors.email?.message}</p>
        </div>

        {/* Especialidade */}
        <div>
          <label className="block text-sm  text-emerald-500  font-medium">
            Especialidade
          </label>
          <Controller
            name="especialidade"
            control={control}
            render={({ field }) => (
              <select
                {...field}
                className={`border p-2 w-full rounded ${
                  errors.especialidade ? "border-red-500" : "border-emerald-300"
                }`}
              >
                <option value="">Selecione</option>
                <option value="Ortodontia">Ortodontia</option>
                <option value="Endodontia">Endodontia</option>
                <option value="Periodontia">Periodontia</option>
                <option value="Implantodontia">Implantodontia</option>
              </select>
            )}
          />
          <p className="text-red-500 text-sm">
            {errors.especialidade?.message}
          </p>
        </div>

        {/* Botão de Enviar */}
        <div className="flex justify-center">
          <motion.button
            whileHover={{ scale: 1.2 }}
            type="submit"
            className="bg-emerald-500 text-white font-bold px-4 py-2 rounded hover:bg-emerald-600"
          >
            ENVIAR PELO WHATSAPP
          </motion.button>
        </div>
      </form>
    </div>
  );
};

export default FormularioDentista;
