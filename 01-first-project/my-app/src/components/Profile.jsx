import React from 'react'
import s from './Profile.module.css';
const Profile = () =>{
    return <div className={s.content}>
    <div>
     <img src='https://html5css.ru/css/css_image_gallery.php' />
   </div>
   <div>
     ava+description
   </div>
   <div>
     My posts
     <div>
       New post
     </div>
     <div className={s.posts}>
       <div className={s.item}>
       post1
       </div>
       <div className={s.posts}>
       post2
       </div>
     </div>
   </div>
   </div>
}

export default Profile;