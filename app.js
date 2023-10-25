const step1=document.getElementById('step-1')
const step2=document.getElementById('step-2')
const step3=document.getElementById('step-3')
const step4=document.getElementById('step-4')
const step5=document.getElementById('step-5')
const btnStep1=document.getElementById('next-1')
const btnStep2=document.getElementById('next-2')
const btnStep3=document.getElementById('next-3')
const btnStep4=document.getElementById('next-4')
const btnConfirm=document.getElementById('confirm')
const btnBack1=document.getElementById('back-1')
const btnBack2=document.getElementById('back-2')
const btnBack3=document.getElementById('back-3')
const btnBack4=document.getElementById('back-4')
const form1=document.getElementById('form-1')
const form2=document.getElementById('form-2')
const form3=document.getElementById('form-3')
const form4=document.getElementById('form-4')
const formService=document.getElementById('form-service')

const nombre=document.getElementById('name')
const email=document.getElementById('email')
const phone=document.getElementById('phone')

const togleYear=document.getElementById('toggle-range')

btnStep1.addEventListener('click',(e)=>{
    e.preventDefault()
    if(form1.checkValidity()){
        step1.style.zIndex=-1
        step2.style.zIndex=106
        console.log({
            nombre:nombre.value,
            email:email.value,
            phone:phone.value
        })

    }else{
        form1.reportValidity()
    }
})
btnStep2.addEventListener('click',(e)=>{
    e.preventDefault()
    step1.style.zIndex=-1
    step2.style.zIndex=-1
    step3.style.zIndex=106
})
const dinamico=document.getElementById('dinamic')
const arcade=document.getElementById('check-arcade')
const advanced=document.getElementById('check-advanced')
const pro=document.getElementById('check-pro')

const planDinamico=document.getElementById('plan-dinamic')


/*servicios */
const onlineService=document.getElementById('online-service')
const onlineServicePrice=document.getElementById('online-service-price')

const storageService=document.getElementById('storage-service')
const storageServicePrice=document.getElementById('storage-service-price')

const profileService=document.getElementById('profile-service')
const profileServicePrice=document.getElementById('profile-service-price')



const addOnline=document.getElementById('add-online')
const addStorage=document.getElementById('add-storage')
const addProfile=document.getElementById('add-profile')





const total = document.getElementById('total')

btnStep3.addEventListener('click',(e)=>{
    let precioTotal=0
    e.preventDefault()
    step1.style.zIndex=-1
    step2.style.zIndex=-1
    step3.style.zIndex=-1
    step4.style.zIndex=106
    if(arcade.checked && togleYear.value==1){
        planDinamico.innerHTML=`<p>Arcade(Monthly)</p><span> $9/mo</span>`
        precioTotal+=9
    }else if(arcade.checked && togleYear.value==2){
        planDinamico.innerHTML=`<p>Arcade(Yearly)</p><span> $90/yr</span>`
        precioTotal+=90
    }else if(advanced.checked && togleYear.value==1){
        planDinamico.innerHTML=`<p>Advanced(Monthly)</p><span> $9/mo</span>`
        precioTotal+=9
    }else if(advanced.checked && togleYear.value==2){
        planDinamico.innerHTML=`<p>Advanced(Yearly)</p><span> $90/yr</span>`
        precioTotal+=90
    }else if(pro.checked && togleYear.value==1){
        planDinamico.innerHTML=`<p>Pro(Monthly)</p><span> $9/mo</span>`
        precioTotal+=9
    }else if(pro.checked && togleYear.value==2){
        planDinamico.innerHTML=`<p>Pro(Yearly)</p><span> $90/yr</span>`
        precioTotal+=90
    }
    
    if(togleYear.value==1){
        if(onlineService.checked){
            addOnline.innerHTML='<p>Add Online Service</p> <span>$1/mo</span>'
            precioTotal+=1
        }
        if(storageService.checked){
            addStorage.innerHTML='<p>Add Storage Service</p> <span>$2/mo</span>'
            precioTotal+=2
        }
        if(profileService.checked){
            addProfile.innerHTML='<p>Add Profile Service</p> <span>$2/mo</span>'
            precioTotal+=2
        }
        total.textContent=`$${precioTotal}/mo`
    }else{
        if(onlineService.checked){
            addOnline.innerHTML='<p>Add Online Service</p> <span>$10/yr</span>'
            precioTotal+=10
        }
        if(storageService.checked){
            addStorage.innerHTML='<p>Add Storage Service</p> <span>$20/yr</span>'
            precioTotal+=20
        }
        if(profileService.checked){
            addProfile.innerHTML='<p>Add Profile Service</p> <span>$20/yr</span>'
            precioTotal+=20
        }
        total.textContent=`$${precioTotal}/yr`
    }
    
})
btnConfirm.addEventListener('click',(e)=>{
    e.preventDefault()
    step1.style.zIndex=-1
    step2.style.zIndex=-1
    step3.style.zIndex=-1
    step4.style.zIndex=-1
    step5.style.zIndex=106
})



btnBack1.addEventListener('click',(e)=>{
    e.preventDefault()
    step1.style.zIndex=106
    step2.style.zIndex=-1
})

btnBack2.addEventListener('click',(e)=>{
    e.preventDefault()
    step1.style.zIndex=-1
    step2.style.zIndex=106
    step3.style.zIndex=-1
})
btnBack3.addEventListener('click',(e)=>{
    e.preventDefault()
    step1.style.zIndex=-1
    step2.style.zIndex=-1
    step3.style.zIndex=106
    step4.style.zIndex=-1
    li.innerHTML='hola'
    li.appendChild(li)
})

const priceArcade=document.getElementById('plan-price-arcade')
const pricePro=document.getElementById('plan-price-pro')
const priceAdvanced=document.getElementById('plan-price-advanced')

const freeAdvanced=document.getElementById('plan-free-advanced')
const freeArcade=document.getElementById('plan-free-arcade')
const freePro=document.getElementById('plan-free-pro')


const precioMouthly=[
    {
        online:1,
        storage:2,
        profile:2
    }
]
const precioYearly=[
    {
        online:10,
        storage:20,
        profile:20
    }
]
togleYear.addEventListener('input',(e)=>{
    e.preventDefault()
    if(togleYear.value==1){
        freeAdvanced.style.display='none'
        freeArcade.style.display='none'
        freePro.style.display='none'
        priceArcade.innerHTML='$9/mo'
        pricePro.innerHTML='$12/mo'
        priceAdvanced.innerHTML='$15/mo'
        onlineServicePrice.innerText='$1/mo'
        storageServicePrice.innerText='$2/mo'
        profileServicePrice.innerText='$2/mo'
        
    }else{
        priceArcade.innerHTML='$90/yr'
        pricePro.innerHTML='$120/yr'
        priceAdvanced.innerHTML='$150/yr'
        freeAdvanced.style.display='block'
        freeArcade.style.display='block'
        freePro.style.display='block'
        onlineServicePrice.innerText='$10/yr'
        storageServicePrice.innerText='$20/yr'
        profileServicePrice.innerText='$20/yr'
    }
})





/*planes */
const planArcade=document.getElementById('check-arcade')

const planAdvanced=document.getElementById('check-advanced')
const planPro=document.getElementById('check-pro')






