import ContactForm from '@/components/ContactForm/ContactForm';


export const metadata = {
    title: 'Страница котактов',
    url: "https://cad-exchanger-client-kotofeus-projects.vercel.app/contact",
    openGraph: {
      title: 'Страница котактов',
    },
  }
 
  
const ContactPage: React.FC = () => {
    return (
        <div>
            <ContactForm />
        </div>
    );
};

export default ContactPage;