import React from 'react'
import s from './MyPosts.module.css'

const MyPosts = () =>{
    return <div>
     My posts
     <div>
       <textarea></textarea>
       <button> Add post</button>
     </div>
     <div className={s.posts}>
       <div className={s.item}>
       <img src='https://www.google.com/imgres?imgurl=http%3A%2F%2Fwww.interface.ru%2Fiarticle%2Fimg%2F23221_38289142.jpg&imgrefurl=http%3A%2F%2Fwww.interface.ru%2Fhome.asp%3FartId%3D23221&tbnid=nm0swC2Km88F6M&vet=12ahUKEwiRuZeBm5T6AhUQpIsKHWEWDdQQMygNegUIARDpAQ..i&docid=LqCo8MV7MPhy0M&w=640&h=480&q=fdfnfh%20xtkjdtrf%20&ved=2ahUKEwiRuZeBm5T6AhUQpIsKHWEWDdQQMygNegUIARDpAQ'></img>
       post1
       </div>
       <div className='item'>
       post3
       </div>
       <div className='item'>
       post4
       </div>
       <div className='item'>
       post5
       </div>
       <div className='item'>
       post6
       </div>
     </div>
   </div> 
}

export default MyPosts;