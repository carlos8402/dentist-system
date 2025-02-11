export function Contact() {
  return (
    <div className="bg-red-100 py-4 md:py-8 lg:py-12 lg:pb-0">
      <h1 className="text-center text-amber-900 text-3xl font-bold pt-6 pb-4">
        NOSSOS CONTATOS
      </h1>
      <div className="lg:flex lg:flex-row-reverse xl:gap-6">
        <img
          src="img\imagem-contatos.png"
          alt="imagem de mulher sorrindo mostrando os dentes"
          className="hidden lg:block"
        />
        <div className="flex gap-2 justify-evenly py-8 px-4 lg:gap-16 lg:mt-4">
          <div>
            <div>
              <h2 className="text-amber-900 text-2xl mb-2">TELEFONES:</h2>
              <p className="text-xl font-semibold  mb-1">(81) 984027695</p>
              <p className="text-xl font-semibold  mb-1">(81) 32668888</p>
            </div>
            <div>
              <h2 className="text-amber-900 text-2xl mt-4 mb-2">
                LOCALIZAÇÂO:
              </h2>
              <p className="text-xl font-semibold  mb-1">
                Rua:Antônio Ferreira, n:48
              </p>
              <p className="text-xl font-semibold  mb-1">
                Mirueira Paulista -PE
              </p>
              <p className="text-xl font-semibold  mb-1">CEP: 57470-748</p>
            </div>
          </div>
          <div>
            <h2 className="text-amber-900 text-2xl mb-2">NOSSO HORÁRIO:</h2>
            <p className="text-xl font-semibold mb-1">SEG: 07:30 - 18:00</p>
            <p className="text-xl font-semibold  mb-1">TER: 07:30 - 18:00</p>
            <p className="text-xl font-semibold  mb-1">QUA: 07:30 - 18:00</p>
            <p className="text-xl font-semibold  mb-1">QUI: 07:30 - 18:00</p>
            <p className="text-xl font-semibold  mb-1">SEX: 07:30 - 18:00</p>
            <p className="text-xl font-semibold  mb-1">SAB: FECHADO</p>
            <p className="text-xl font-semibold  mb-1">DOM: FECHADO</p>
          </div>
        </div>
      </div>
    </div>
  );
}
