import './style.css'
import Sidebar from '../../components/Siderbar'
import { locales } from '@/config';


export async function generateStaticParams() {
  return locales.map((lng) => ({ lng }))
}

// export async function generateStaticParams() {
//   return [
//     {
//       lng: "zh",
//       lang: "en-US",
//     },
//     {   
//       lng: "en",
//       lang: 'de'
//     },
//   ];
// }




export default function RootLayout({
  children,
  params: {
    lng
  }
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={lng}>
      <body>
        <div className="container">
          <div className="main">
              <Sidebar></Sidebar>
              <section className="col note-viewer">{children}</section>
          </div>
        </div>
      </body>
    </html>
  );
}
