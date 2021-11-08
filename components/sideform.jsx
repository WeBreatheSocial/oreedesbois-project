import React, {useState} from 'react'


const Form = () => {
    const [Name, setName] = useState('');
    const [Phone, setPhone] = useState('');
    const [Email, setEmail] = useState('');
    const [Message, setMessage] = useState('');


    const submitForm = async (e) => {
        e.preventDefault()
       const res = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
        // body: JSON.stringify(Email.value),
        body: JSON.stringify({ Name, Phone, Email, Message }),
      });
    
      // console.log(Name, Company, Email)
      if (res.status === 201) {
        alert('Envoi confirmé', { type: 'success' });
        router.push('/');
      } else {
        alert('Veuillez vérifier vos informations', { type: 'error' });
      }
      router.push('/');
      // alert(JSON.stringify({ Name, Company, Number, Email, Website, Message }));
    }

    return (
        <div className='mx-auto'>
              <form method="POST" onSubmit={submitForm} className=' flex flex-col w-full mx-auto justify-center items-start'>
                <input
              name="Name"
              id="Name"
              type="text"
              pattern=".{1,}"
              required
              title="1 caractère minimum"
              placeholder="Nom et Prénom"
              className='sideinputs'
              value={Name}
              autofocus
            onChange={(e) => setName(e.target.value)}
            />
             <input
              name="Email"
              id="Email"
              type="text"
              pattern=".{1,}"
              required
              className='sideinputs'

              title="1 caractère minimum"
              placeholder="Email"
              value={Email}
            onChange={(e) => setEmail(e.target.value)}
            />
              <input
              name="Phone"
              id="Phone"
              className='sideinputs'

              type="text"
              pattern=".{1,}"
              required
              title="1 caractère minimum"
              placeholder="Numéro de téléphone"
              value={Phone}
            onChange={(e) => setPhone(e.target.value)}
            />
             <textarea
              name="Message"
              id="Message"
              className='sideinputs h-20'

              rows="2"
              type="text"
              // pattern=".{1,}"
              // required
              // title="1 caractère minimum"
              placeholder="Message (Optionnel)"
              value={Message}
            onChange={(e) => setMessage(e.target.value)}
            />
<div className='sideterm-ctn '> 
<label className="checkbox"> 
    <input className="checkbox-input" type="checkbox" required/>
    <span className="checkbox-checkmark-box">
      <span className="checkbox-checkmark"></span>
      <span className=' lg:max-w-4xl cursor-default terms-text'> Je déclare avoir lu les conditions générales d’utilisation, notamment la mention relative à la protection des données personnelles.
    </span>
</span>
    </label>
    </div>
      <button className='btn-color sidebtn-submit'> 
    <span className='btn-text text-right'>Envoyer >  </span>
    </button>
   
            </form>
        </div>
    )
}

export default Form
