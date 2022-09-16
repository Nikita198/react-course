import React from 'react'
import MyPosts from './MyPost/MyPosts';
import s from './Profile.module.css';

const Profile = () =>{
    return (<div className={s.content}>
    <div>
     <img src='https://html5css.ru/css/css_image_gallery.php' />
   </div>
   <div>
     ava+description
   </div>
   <MyPosts />

  
   </div>)
}

export default Profile;

