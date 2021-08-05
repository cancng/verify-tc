import { createClient } from 'soap';

export type IResult = {
  TCKimlikNoDogrulaResult: boolean;
};

export type ICitizen = {
  tcNumber: number;
  name: string;
  surname: string;
  birthYear: number;
};

export async function verifyTC({
  name,
  surname,
  tcNumber,
  birthYear,
}: ICitizen): Promise<boolean> {
  return new Promise((resolve) => {
    createClient(
      'https://tckimlik.nvi.gov.tr/service/kpspublic.asmx?WSDL',
      (_err, client) => {
        client.TCKimlikNoDogrula(
          {
            Ad: name,
            Soyad: surname,
            DogumYili: birthYear,
            TCKimlikNo: tcNumber,
          },
          (err: any, result: IResult) => {
            resolve(result.TCKimlikNoDogrulaResult);
          }
        );
      }
    );
  });
}
