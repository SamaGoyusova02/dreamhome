let dropdown1 = document.getElementById('dropdown1')
function opendrop(){
    if(dropdown1.style.display == 'none'){
        dropdown1.style.display = 'block'
    }
    else(dropdown1.style.display = 'none')
}

let menubar = document.getElementById('menubar')
function openmenu(){
   menubar.style.left = '0'
}
function closemenu(){
    menubar.style.left = '-100%'
}

//popular
let img1 = ['https://themewagon.github.io/property/images/img_7.jpg' , 'https://themewagon.github.io/property/images/img_8.jpg' , 'https://themewagon.github.io/property/images/img_1.jpg' , 'https://themewagon.github.io/property/images/img_2.jpg' , 'https://themewagon.github.io/property/images/img_3.jpg' , 'https://themewagon.github.io/property/images/img_4.jpg' , 'https://themewagon.github.io/property/images/img_4.jpg' , 'https://themewagon.github.io/property/images/img_6.jpg'] 
let price1 = ['$1,291,000' , '$3,291,000' , '$1,491,000', '$2,291,000', '$4,291,000' ,'$1,491,400' ,'$3,891,050' ,'$1,591,060']
let text1 = ['5232 California Fake, Ave. 21BC' , '5232 Los Angeles Fake, Ave. 21BC' , '5232 Philadelphia Fake, Ave. 21BC' ,'5232 Washington, D.C. Fake, Ave. 21BC' , '5232 San Diego Fake, Ave. 21BC' , '5232 California Fake, Ave. 21BC' , '5232 California Fake, Ave. 21BC' , '5232 California Fake, Ave. 21BC']
let loc = ['California, USA' , 'Los Angeles, USA' , 'Philadelphia, USA' , 'Washington, D.C., USA' , 'San Diego, USA', 'California, USA' , 'California, USA' , 'California, USA']
let bed = ['4','3','2' , '1' , '5' , '3', '2', '5']
let bath = ['3' ,'2' , '1','4','5' ,'3' ,'2','4']
let popular = document.getElementById('popular')
for (let i = 1; i < price1.length; i++) {
   popular.innerHTML += `
        <div class=" shrink-0 flex flex-col justify-start items-start gap-2.5  w-[380px] overflow-hidden shadow-[0_0_4px_#7f7f7f]">
                <img class="w-[380px] h-[290px]" src="${img1[i]}" alt=""/>
                <p class="text-[#005555] font-[650] text-2xl ml-5">${price1[i]}</p>
                <div class="pl-5"><hr class="w-[125px]     text-[#005555] "/></div>
                <p class="text-[#7f7f7f] text-[.9em] pl-5">${text1[i]}</p>
                <p class="text-xl font-[700] pl-5">${loc[i]}</p>
                <div class="flex gap-3 text-[#8e8e8e] pl-5">
                    <div class="flex gap-2">
                        <p><i class="fa-solid fa-bed"></i></p>
                        <p>${bed[i]} beds</p>
                    </div>
                    <div class="flex gap-2">
                        <p><i class="fa-solid fa-bath"></i></p>
                        <p>${bath[i]} baths</p>
                    </div>
                </div>
                <button class="bg-[#005555] ml-5 mb-7 w-[140px] h-[40px] rounded-[20px] mt-3 text-white">See Details</button>
            </div>
   `
    
}

//Card
let card = document.getElementById('card')
let icon = ['<i class="fa-solid fa-house-chimney"></i>' , '<i class="fa-solid fa-building"></i>' ,'<i class="fa-solid fa-house-user"></i>' , '<i class="fa-solid fa-city"></i>']
let title = ['Our Properties' , 'Property for Sale' , 'Real Estate Agent' , 'House for Sale']
let topic = ['Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, accusamus.' ,'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, accusamus.' , 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, accusamus.' , 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, accusamus.']
for (let j = 0; j < icon.length; j++) {
    card.innerHTML += `
             <div data-aos="fade-up"  data-aos-duration="2000"  class="bg-white w-[320px]  lg:mt-10 flex flex-col justify-center items-center gap-4 py-10 my-5 rounded-[10px]  ">
                <p class = "text-5xl text-[#00204a]" >${icon[j]}</p>
                <p class="text-[#00204a] text-[1em] font-[500]">${title[j]}</p>
                <p class="text-center text-[#7f7f7f]">${topic[j]}</p>
                <p class="text-[#00204a] ">Learn More</p>
                <div><hr class="text-[#00204a] w-[120px]"/></div>
            </div>
    `
    
}

//customer
let img2 = ['https://themewagon.github.io/property/images/person_4-min.jpg' , 'https://themewagon.github.io/property/images/person_1-min.jpg' , 'https://themewagon.github.io/property/images/person_2-min.jpg' , 'https://themewagon.github.io/property/images/person_3-min.jpg' ]
let name2 = ['Dave Smith' , 'James Smith' , 'Mike Houston' , 'Cameron Webster']
let customertext = ['“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”' , '“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”' , '“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”' , '“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”']
let customer = document.getElementById('customer')
for (let c = 0; c < img2.length; c++) {
   customer.innerHTML += `
         <div class="w-[380px] flex flex-col gap-1 shrink-0">
                <img class="h-[130px] w-[130px] rounded-[50%]" src="${img2[c]}" alt="">
                <div class="text-[#ffc107] mt-5"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div>
                <p class="text-[#00204a] text-xl font-[650] pb-3">${name2[c]}</p>
                <p class="text-[.9em] ">${customertext[c]}</p>
                <p class="text-[#7f7f7f] pt-1">Designer, Co-founder</p>
            </div>
   `
    
}

//Our Agents
let agentimg = ['https://themewagon.github.io/property/images/person_1-min.jpg' , 'https://themewagon.github.io/property/images/person_2-min.jpg' , 'https://themewagon.github.io/property/images/person_3-min.jpg']
let agenname = ['James Doe' , 'Jean Smith' , 'Alicia Huston']
let agentalt = ['Real Estate Agent' , 'Real Estate Agent' , 'Real Estate Agent']
let agenttext = ['Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere officiis inventore cumque tenetur laboriosam, minus culpa doloremque odio, neque molestias?' , 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere officiis inventore cumque tenetur laboriosam, minus culpa doloremque odio, neque molestias?' , 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere officiis inventore cumque tenetur laboriosam, minus culpa doloremque odio, neque molestias?']
let agent = document.getElementById('agent')
for (let s = 0; s < agentimg.length; s++) {
   agent.innerHTML += `
           <div data-aos="zoom-in"  data-aos-duration="2000" class=" w-full lg:max-w-[410px] relative flex flex-col justify-center items-center overflow-hidden text-center">
                    <div class="bg-white w-full mt-[60px] pt-20 pb-10 rounded-[10px] flex flex-col gap-2 px-1">
                            <p class="font-[600] text-[1.1em]">${agenname[s]}</p>
                            <p class="text-[#888888] text-[.9em]">${agentalt[s]}</p>
                            <p class="text-[#888888] text-[1em]">${agenttext[s]}</p>
                            <div class="flex gap-4 justify-center items-center mt-5">
                                <p class="text-white bg-[#00204a] h-[40px] w-[40px] rounded-[50%] flex justify-center items-center hover:bg-transparent hover:border hover:border-[#00204a] hover:scale-[1] hover:-translate-y-1 hover:text-[#00204a] duration-300 ease-in-out"><i class="fa-brands fa-twitter text-[.9em]"></i></p>
                                <p class="text-white bg-[#00204a] h-[40px] w-[40px] rounded-[50%] flex justify-center items-center hover:bg-transparent hover:border hover:border-[#00204a] hover:scale-[1] hover:-translate-y-1 hover:text-[#00204a] duration-300 ease-in-out"><i class="fa-brands fa-facebook-f text-[.9em]"></i></p>
                                <p class="text-white bg-[#00204a] h-[40px] w-[40px] rounded-[50%] flex justify-center items-center hover:bg-transparent hover:border hover:border-[#00204a] hover:scale-[1] hover:-translate-y-1 hover:text-[#00204a] duration-300 ease-in-out"><i class="fa-brands fa-linkedin-in text-[.9em]"></i></p>
                                <p class="text-white bg-[#00204a] h-[40px] w-[40px] rounded-[50%] flex justify-center items-center hover:bg-transparent hover:border hover:border-[#00204a] hover:scale-[1] hover:-translate-y-1 hover:text-[#00204a] duration-300 ease-in-out"><i class="fa-brands fa-instagram text-[.9em]"></i></p>
                            </div>
                    </div>
                    <img class="w-[110px] h-[110px] rounded-[50%] absolute top-0" src="${agentimg[s]}" alt="">
                </div>
   `
    
}