import React, {useState} from 'react'
import Image from 'next/image'
import PureModal from 'react-pure-modal';
import 'react-pure-modal/dist/react-pure-modal.min.css';
import Contact from '../public/svg/sideform.svg'
import { useRouter } from "next/router";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import checkMark from '../public/png/done.png'
import redx from '../public/png/error.png'
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";

const Newsideform = () => {
    const [Name, setName] = useState('');
    const [Phone, setPhone] = useState('');
    const [Email, setEmail] = useState('');
    const [Message, setMessage] = useState('');

    const [modal, setModal] = useState(false);
    const [popOpen, setPopOpen] = useState(true);
    const router = useRouter();
    const [submitted, setSubmitted] = useState(false);
    const [confirmed, setConfirmed] = useState(false);
    const [failed, setFailed] = useState(false);

    const handlePopup = () => {
        setPopOpen(!popOpen);
    }

    const schema = yup.object().shape({
      name: yup.string().required(),
      email: yup.string().email().required(),
      phone: yup.string().required(),
      message: yup.string().required(),
    });

    const {
      register,
      handleSubmit,
      formState: { errors },
      reset,
    } = useForm({
      resolver: yupResolver(schema),
    });

    const submitForm = (data) => {
      reset();
      setSubmitted(true);
      console.log(data);
      setTimeout(() => {  setSubmitted(false); }, 2000);
      setTimeout(() => {  setConfirmed(true); }, 2000);
      axios
        .post("/api/submit-form", {
          email: data.email,
          name: data.name,
          phone: data.phone,
          message: data.message,
        })
        .then((response) => {
          console.log(data);
          setConfirmed(true);
          console.log(response);
          reset();
        })
        .catch((error) => {
          setFailed(true);
          console.log(error) 
        });
    };

    return (
        <div className=''><PureModal
        header="NOTICE LÉGALE"
       
        width='90vw'
        height='50vh'
        isOpen={modal}
        closeButton="X"
        closeButtonPosition="header"
        onClose={() => {
          setModal(false);
          return true;
        }}
        className='z-50'
      >
        <div className='px-2 text-left md:px-12 whitespace-normal'>
        <h4 className='text-sm md:section-subtitle mt-2 md:mt-5 w-screen'>Le présent site est publié par :</h4>
        <p className='text-xs md:section-p '>Sté MAJMAA EL KHEIR S.A.R.L au capital de 50.000.000,00 DH immatriculée au Registre du Commerce de Casablanca sous le numéro 32667 ayant son siège social Avenue Mohammed VI, Résidence Nahil A, Appt 14 3ème étage Gueliz Marrakech Maroc.</p>
        <h4 className='text-sm md:section-subtitle mt-2 md:mt-5'>Propriété intellectuelle</h4>
        <p className='text-xs md:section-p'>L’ensemble des éléments qui figurent sur le site sont protégés par la législation internationale sur le droit d'auteur et le droit des marques. L’ensemble des éléments du site, les marques, logos, dessins, graphismes, chartes graphiques, icônes, textes, applications, scripts, fonctionnalité, ainsi que leur sélection ou combinaison apparaissant à l’adresse lebien-être.ma ou sur les sous-domaines associés, sont la propriété exclusive de MAJMAA EL KHEIR. L’accès au site n’entraîne aucune cession des droits susvisés. Les droits d’utilisation du site ne sont concédés que sous forme numérique aux fins de visualisation des pages consultées, à titre personnel, non cessible et non exclusif. L’utilisateur s’interdit de copier, reproduire, modifier, distribuer, afficher ou vendre, par quelque procédé ou forme que ce soit, en tout ou partie, tout élément du site ou se rapportant à celui-ci, par quelque procédé que ce soit, et pour toute autre finalité y compris à titre commercial, sans l’autorisation préalable et écrite. En cas d’utilisation illégale ou non autorisée du site, MAJMAA EL KHEIR se réserve le droit de prendre toute mesure adéquate qu’elle estime nécessaire et, le cas échéant, d’intenter toute action en justice appropriée, et/ou signaler l’infraction aux autorités judiciaires et de police.</p>
        <h4 className='text-sm md:section-subtitle mt-2 md:mt-5'>Informatique et Libertés</h4>
        <p className='text-xs md:section-p'>MAJMAA EL KHEIR s’engage à protéger la vie privée des utilisateurs/internautes dans le respect des réglementations en vigueur et en particulier de la loi N° 09-08, promulguée par le Dahir N° 1-09-15 du 22 Safar 1430 (18 Février 2009), relative à la protection des personnes physiques à l'égard du traitement des données à caractère personnel. Les traitements mis en œuvre sur notre site ont pour finalité : - la collecte de données de connexion à des fins statistiques ; - gestion des formulaires en ligne ; Les destinataires sont les services MAJMAA EL KHEIR chargés de la communication et du marketing, les filiales, les sociétés affiliées et/ou les partenaires commerciaux, les fournisseurs de services liés au Site internet. Les données sont hébergées et sont répliquées sur notre serveur. MAJMAA EL KHEIR se réserve le droit de transmettre vos données personnelles afin de satisfaire à ses obligations légales, et notamment si elle en était contrainte par réquisition judiciaire. Ces traitement, qui sont nécessaires à la réalisation de l'intérêt légitime poursuivi par MAJMAA EL KHEIR et ne portent pas atteinte à l'intérêt ou les droits et libertés fondamentaux des personnes concernées, ont reçu récépissé de la Commission nationale de contrôle de la protection des données à caractère personnel (CNDP), sous les numéros D-M-346/2017. Vous bénéficiez des droits d’accès, de rectification et d’opposition, sauf dans les cas où le traitement répond à une obligation légale, au traitement de vos données à caractère personnel. Ces droits peuvent être exercés, conformément à la loi N° 09-08 promulguée par le Dahir N° 1-09-15 du 22 Safar 1430, en justifiant de son identité et d’un motif légitime, par lettre recommandée avec accusé de réception à l’adresse suivante : Avenue Mohammed VI, Résidence Nahil A, Appt 14 3ème étage Gueliz Marrakech Maroc.</p>
        <h4 className='text-sm md:section-subtitle mt-2 md:mt-5'>Google Analytics et Vie privée</h4>
        <p className='text-xs md:section-p'>Ce site utilise Google Analytics, un service d'analyse de site internet fourni par Google Inc. (« Google »). Pour utiliser « Analytics », un responsable de site doit insérer une applet (javascript) dans chacune des pages de son site. Cette applet collecte et envoie à Google des données sur chaque visiteur du site. Google Analytics utilise son propre cookie pour effectuer le suivi des interactions d’un visiteur. En utilisant ce site internet, vous consentez expressément au traitement de vos données nominatives par Google. Google n’utilise ces données que dans le but d'évaluer votre utilisation du site, de compiler des rapports sur l'activité du site à destination de MAJMAA EL KHEIR. Les données collectées et traitées sont : la provenance géographique du visiteur, son adresse IP, la date de sa visite, la durée de sa visite, les pages consultées ainsi que l’enchaînement des pages. Afin de s’assurer que l’utilisation de Google Analytics est compatible avec la directive 2009/136/CE, les dispositions nationales et communautaires en matière de protection des données personnelles, MAJMAA EL KHEIR s’engage à examiner régulièrement toute modification des conditions générales d’utilisation de Google Analytics et, le cas échéant, à abandonner cet outil si ces modifications devaient porter atteinte aux droits et libertés fondamentaux des visiteurs. Si vous ne souhaitez pas transmettre d'informations à Google Analytics, téléchargez et installez ce module dans votre navigateur, disponible à l’adresse suivant : http://tools.google.com/dlpage/gaoptout?hl=fr</p>
        <h4 className='text-sm md:section-subtitle mt-2 md:mt-5'>Lien hypertexte</h4>
        <p className='text-xs md:section-p'>Les liens hypertextes présents sur le site et renvoyant à un site Internet tiers ne sauraient engager la responsabilité de MAJMAA EL KHEIR MAJMAA EL KHEIR n’exerçant aucun contrôle et n’ayant aucune maîtrise sur le contenu de tout site tiers, vous y accédez sous votre propre responsabilité. MAJMAA EL KHEIR ne saurait en aucun cas être tenue responsable du contenu ainsi que des produits ou services proposés sur tout site tiers.</p>
        <h4 className='text-sm md:section-subtitle mt-2 md:mt-5'>Droit applicable</h4>
        <p className='text-xs md:section-p'>Le présent site et ses mentions légales sont soumis au droit marocain.</p>
        </div>
      </PureModal>
        <div className={popOpen ? 'sticky-popup sticky-popup-right open_sticky_popup_right popup-content-bounce-in-right open open_sticky_popup_right' : 'sticky-popup closed-sticky-popup-right open_sticky_popup_right popup-content-bounce-in-right'}>
        <div className='popup-wrap'>
        <div className='popup-header'  onClick={handlePopup}>
        <div className={popOpen ? 'hidden' : 'block minusclose'}>
        <Image src={Contact} alt='' height={35} width={35}/>
        </div>
        <div className={popOpen ? 'block font-bold text-white text-center minusclose' : 'hidden'}>
        <h1 className=''>-</h1>
        </div>
            <span className='popup-title text-justify text-base text-white font-medium uppercase'>
            Contact 
            <div className='popup-image relative'>
              
            </div>
            </span>

            </div>
            <div className='popup-content'>
            <h1 className='popup-maintitle my-2 text-center'>CONTACT</h1>
            <div className={submitted ? 'h-auto flex flex-col justify-between items-center space-y-6 opacity-100 transition-all mx-auto' : 'hidden transition-all opacity-0'}>
              {/* <Image src={Checkmark} alt=''/> */}
              <Loader
        type="ThreeDots"
        color="#c79539"
        height={100}
        width={100}
        visible={submitted}
      />
      <p className='font-thin text-xs'>Envoi en cours...</p>
            </div>
            <div className={confirmed ? 'h-auto flex flex-col px-6 justify-between items-center space-y-6 opacity-100 transition-all mx-auto' : 'hidden transition-all opacity-0'}>
              {/* <Image src={Checkmark} alt=''/> */}
            <Image src={checkMark} alt='' width={50} height={50}/>
            <h4 className='section-subtitle mt-5 text-center uppercase'>Félicitations ! 
            <br/>
            Votre formulaire a été rempli avec succès.</h4>
              <p className='section-p'>L’un de nos commerciaux vous contactera dans les plus brefs délais </p>
            </div>
            <div className={failed ? 'h-auto flex flex-col px-6 justify-between items-center space-y-6 opacity-100 transition-all mx-auto' : 'hidden transition-all opacity-0'}>
              {/* <Image src={Checkmark} alt=''/> */}
            <Image src={redx} alt='' width={50} height={50}/>
            <h4 className='section-subtitle mt-5 text-center uppercase'>Il y a eu une erreur lors de la transmission de vos données.</h4>
              <p className='section-p'>Veuillez nous contacter par téléphone ou réessayer ultérieurement.</p>
            </div>
                <div className='popup-content-pad'>
                <div className={submitted ? 'hidden' : 'block'}>
                <div className={confirmed ? 'hidden' : 'block'}>
                <div className={failed ? 'hidden' : 'block'}>
                    <p className='uppercase font-medium'>RÉSERVEZ VOTRE RENDEZ-VOUS DÈS MAINTENANT</p>
                    <p className='section-p uppercase'>NOUS REVIENDRONS VERS VOUS AU PLUS VITE.</p>
                    <form id='sideForm' lang='fr' method="POST" onSubmit={handleSubmit(submitForm)} autoComplete="off" className=' flex flex-col w-full mx-auto justify-center items-start'>
                    <input
              type="text"
              pattern=".{1,}"
              required
              title="1 caractère minimum"
              placeholder="Nom et Prénom"
              className='sideinputs'
              {...register("name")}
              autoFocus
            />
             <input
              name="email"
              id="email"
              type="text"
              pattern=".{1,}"
              required
              className='sideinputs'
              title="1 caractère minimum"
              placeholder="Email"
              {...register("email")}
            />
              <input
              name="phone"
              id="phone"
              className='sideinputs'
              type="text"
              pattern=".{1,}"
              required
              title="10 caractères minimum"
              placeholder="Numéro de téléphone"
              {...register("phone")}
            />
                         <textarea
              name="message"
              id="message"
              className='sideinputs h-20'

              rows="2"
              type="text"
              // pattern=".{1,}"
              // required
              // title="1 caractère minimum"
              placeholder="Message (Optionnel)"
              {...register("message")}
            />
<div className='sideterm-ctn '> 
<label className="checkbox"> 
    <input className="checkbox-input" type="checkbox" required/>
    <span className="checkbox-checkmark-box">
      <span className="checkbox-checkmark"></span>
      <span className='popup-terms cursor-default font-normal'> Je déclare avoir lu <span className='terms-link' onClick={() => setModal(true)}>les conditions générales d’utilisation</span>, notamment la mention relative à la protection des données personnelles.
    </span>
</span>
    </label>
    </div>
      <button type="submit" className='btn-color sidebtn-submit'> 
    <span className='btn-text text-right'>Envoyer >  </span>
    </button>
   
            </form>
            </div>
            </div>
            </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    )
}

export default Newsideform
