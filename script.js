const url = 'https://memeapi-production.up.railway.app/meme'
        const test = document.querySelector('.test')
        const loading = document.querySelector('.loading')
        const getMeme = async() =>{
            const response = await fetch(url);
            const data = await response.json();
            const myItems = data.meme;
            myItems.map((item)=>{
                const images =  document.createElement('img')
                const col = document.createElement('div');
                col.classList.add('col-lg-3')
                col.classList.add('border')
                col.classList.add('my-3')
                col.classList.add('m-auto')
                col.classList.add('box')
                col.classList.add('m-auto')
                col.classList.add('col-6')
                col.style.height = '200px'
                col.classList.add('p-3')
                test.appendChild(col)
                images.src = item.url;
                images.style.width = '100%'
                images.style.height = '100%'
                images.style.objectFit = 'contain'

                col.appendChild(images)
            })
        }
        // getMeme()
        setTimeout(()=>{
            getMeme()
            loading.innerHTML = ''
        },2000)