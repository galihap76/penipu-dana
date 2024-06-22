import requests
import argparse

parser = argparse.ArgumentParser()
parser.add_argument('-t', '--token', type=str, required=True, help='Token si penipu')
parser.add_argument('-c', '--chat_id', type=str, required=True, help='Chat id si penipu')
args = parser.parse_args()

class PenipuDana:
    
    def main(self):
    
        if args.token and args.chat_id:
            while True:
                try:
                   
                    jmlPesan = int(input("[*] Berapa jumlah pesan yang dikirim? "))       
                    text = input("[*] Masukkan pesan: ")

                    for i in range(jmlPesan):
                        API_PENIPU = f'https://api.telegram.org/bot{args.token}/sendMessage'
                        
                        payload = {
                            'chat_id': args.chat_id,
                            'text': text,
                            'parse_mode': 'html'
                        }

                        response = requests.post(API_PENIPU, data=payload)

                        if response.status_code == 200:
                            print(f"[+] Pesan '{text}' berhasil dikirim dengan status response [{response.status_code}] \n")
                        else:
                            print(f"[-] Pesan '{text}' gagal dikirim dengan status response [{response.status_code}] \n")

                    cobaLagi = input('[*] Mau coba lagi [y/n] ? : ').lower().strip()

                    if cobaLagi == 'y':
                        continue
                    else:
                        break

                except ValueError:
                    print("[!] Masukkan jumlah pesan yang valid.")

                except KeyboardInterrupt:
                    print("\n[-] Pengiriman pesan dihentikan.")
                    break

if __name__ == "__main__":
    RUN = PenipuDana()
    RUN.main()
