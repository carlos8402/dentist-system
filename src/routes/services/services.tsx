export function Services() {
  return (
    <div className="bg-white">
      <h1 className="text-3xl text-center font-bold text-amber-900 pt-4  pb-4 md:py-6">
        SERVIÇOS
      </h1>
      <div>
        <ul className="grid sm:grid-cols-1 md:grid-cols-2 md:gap-6 list-none px-4 md:px-10">
          <li>
            <h2 className="text-center text-3xl text-amber-700  pb-3">
              IMPLANTES DENTÁRIOS
            </h2>
            <div>
              <img
                src="img\implantes-dentarios.jpg"
                alt="imagem de implante dentario"
                className="w-[600px] mx-auto"
              />

              <p className="pt-3 text-lg md:max-w-[600px]">
                Os implantes dentários são substitutos artificiais das raízes
                perdidas, feitos a partir de uma liga de titânio, que é um
                material biocompatível. Sobre os implantes, são instaladas as
                próteses, que podem ser unitárias, parciais ou totais.
              </p>
              <p className="pt-3 text-lg md:max-w-[600px] pb-6">
                É um tratamento padrão ouro para substituição de um ou mais
                dentes perdidos, devolve a função mastigatória e melhora a
                estética do sorriso, além de restabelecer a fonética prejudicada
                pela ausência de dentes.
              </p>
            </div>
          </li>
          <li>
            <h2 className="text-center text-3xl text-amber-700  pb-3 ">
              PRÓTESES DENTÁRIAS
            </h2>
            <div>
              <img
                src="img\proteses-dentarias.jpg"
                alt="imagem de proteses dentarias"
                className="w-[600px] mx-auto"
              />
              <p className="pt-3 text-lg md:max-w-[600px]">
                A perda de um ou mais dentes é motivo de preocupação,
                desconforto e prejuízo na fala, na mastigação e na estética do
                sorriso. Todo dente perdido deve ser reabilitado através de uma
                prótese dentária, que pode ser fixa ou removível.
              </p>
              <p className="pt-3 text-lg md:max-w-[600px] pb-6">
                Dentre as próteses fixas, elas podem ser sobre dentes (coroas,
                restaurações adesivas ou pontes fixas) ou sobre implantes
                (coroas, pontes fixas, overdenture ou prótese protocolo).
              </p>
            </div>
          </li>
          <li>
            <h2 className="text-center text-3xl text-amber-700 pb-3">
              ESTÉTICA DO SORRISO
            </h2>
            <div>
              <img
                src="img\estetica-do-sorriso.jpg"
                alt="imagem de estatica do sorriso"
                className="w-[600px] mx-auto"
              />
              <p className="pt-3 text-lg md:max-w-[600px]">
                A Estética do Sorriso contempla procedimentos que visam
                harmonizar o seu sorriso, aumentando a sua auto-estima e
                confiança.
              </p>
              <p className="pt-3 text-lg md:max-w-[600px] pb-6">
                O clareamento dentário é uma técnica segura e eficaz para
                remoção de pigmentos dos dentes e deve sempre ser orientada por
                um cirurgião-dentista.
              </p>
            </div>
          </li>
          <li>
            <h2 className="text-center text-3xl text-amber-700 pb-3">
              PREVENÇÃO
            </h2>
            <div>
              <img
                src="img\prevencao.jpg"
                alt="imagem de prevenção dos dentes"
                className="w-[600px] mx-auto"
              />
              <p className="pt-3 text-lg md:max-w-[600px] pb-6">
                A visita regular ao dentista previne o aparecimento de cáries e
                problemas periodontais, além de perdas dentárias e progressão de
                lesões na cavidade bucal, devido à regular inspeção das
                estruturas orais, constante orientação de higiene bucal e ações
                preventivas no controle de placa bacteriana.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
