
import Button from '../Button/Button';
import styles from './ContactForm.module.css';
import { BiSolidMessageSquareDetail } from "react-icons/bi";
import { BiSolidPhoneCall } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { useState,useEffect } from 'react';

const ContactForm = () => {
    //arrow function
    // const onViaCall = () => {
    //     console.log("I am from call");

    // }

    //useState() is a hook in react using which i can set a value and then change it by using funcion written inside hook. eg setName function etc.
    const[name,setName] = useState("");
    const[email,setEmail] = useState("");
    const[text,setText] = useState("");

    const[msg,setMsg] = useState("");

    const[formData, setFormData] = useState({ 
        name : "",
        email:"",
        text:""
    });
////////////////////////////////////////        spread Operator  ///////////////////////////////////////////////////
    // Assuming formData is { firstName: 'John', lastName: 'Doe' }

    // Without spread operator
    // setFormData({ lastName: 'NewLastName' });
    // This would result in formData being { lastName: 'NewLastName' }
    // But the firstName is lost.

    // With spread operator
    // setFormData({ ...formData, lastName: 'NewLastName' });
    // This results in formData being { firstName: 'John', lastName: 'NewLastName' }
    // The firstName is preserved, and only lastName is updated.

    // The use of square brackets in [name]: value is a dynamic key in an object literal. 
    // It allows you to use the value of the name variable as the key for the object property. 
    // This is useful when you have multiple fields in your form, and you want to update the state dynamically based on the field name.
    const handlechange= (e) => {
        //...formData is spread operator. this results in formdata being {name:shoaib,email:asdasda@gmail.com} . old data isnot lost if i use ...formData.
        const{name,value} = e.target;
        setFormData({
            ...formData,
            [name]:value,

        })
    }
    

    const onSubmit = (event) => {
        // console.log(event);
        //event consists of many things .after searching In event.target there is my form inputs. target[0] has name input target[1] has email. target[2] has textarea.
        console.log('name',event.target[0].value);
        console.log('email',event.target[1].value);
        console.log('textarea',event.target[2].value);
        event.preventDefault();
        

        

        setName(event.target[0].value);
        setEmail(event.target[1].value);
        setText(event.target[2].value);

        setFormData({
            name:'',
            email:'',
            text:''
        })
        setMsg("Message Sent Suceessfully");
        setTimeout(()=>{
            setMsg("");
        },2000);
        
        

        

    }
    return ( 
        <>
        {/* section creates two section. In one section form is displayed and in other section images is displayed */}
        <section className={styles.container}>  
            <div className={styles.contact_form}>
                <div className={styles.top_btn}>
                    {/* text and icon is a prop here . icon is a component so i have used it inside {} an have used < />*/}
                    <Button text="VIA SUPPORT CHAT" icon = {<BiSolidMessageSquareDetail fontSize="22px"/>}/>
                    <Button text="VIA CALL" icon = {<BiSolidPhoneCall fontSize="22px"/>} />
                </div>
                {/* as we are sending same but different props to same component ie; Button . I am writing isOutline to change css class of this particular btn. */}
                <Button isOutline={true} text="VIA EMAIL FORM" icon={<MdEmail fontSize="22px" />} />
                <form onSubmit={onSubmit} name='submit-to-google-sheet'>
                    <div className={styles.form_control}>
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" value={formData.name} onChange={handlechange}  id="" autoComplete='off' />
                    </div>
                    <div className={styles.form_control}>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" value={formData.email} onChange={handlechange} id="" autoComplete='off' />
                    </div>
                    <div className={styles.form_control}>
                        <label htmlFor="text">Text</label>
                        <textarea name='text'value={formData.text} onChange={handlechange} rows={7} />
                    </div>
                    <div style={{
                        display:"flex",
                        justifyContent:"end"
                    }}>
                    <Button text="SUBMIT"  type='submit'/>
                    </div>
                    {/* <div>{name + " "+ email + " "+ text}</div> */}
                    

                    
                </form>
                <span className={styles.msg}> {msg}</span>

            </div>
            <div className={styles.contact_image}>
                <img src="/images/contact.svg" alt="" />
            </div>

        </section>

        </>
     );
}
 
export default ContactForm;