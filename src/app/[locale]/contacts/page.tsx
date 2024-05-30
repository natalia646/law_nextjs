import dynamic from 'next/dynamic';

// Динамічне імпортування компонента з вимкненим SSR
const GoogleMap = dynamic(() => import('../../../components/googleMap/GoogleMap'), { ssr: false });

export default function ContactsPage() {
  return (
    <div>
     <GoogleMap/>
    </div>
  )
}
