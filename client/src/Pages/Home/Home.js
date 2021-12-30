import React,{useContext} from 'react';
import './Home.css';
import { UserDataContext } from '../../Context/UserDataContext';
import BlogList from '../../components/BlogList/BlogList';

const Home = () => {

    const {posts} = useContext(UserDataContext);

    console.log(posts);

    return (
        <div className='container utility_height'>
            <h1>Home</h1>
            <p className='description-para'>A man travels the world over in search of what he needs, and return home to find it. But you do not need to travels the world in search of your blogs beacuse we kept all of your blogs here, at your HOME.</p>
           <div className='blogList--container'>
        
           {
               posts.length !==0?(
                posts.map((ele) => {
                    return(
                     <BlogList 
                     key={ele._id}
                     id={ele._id}
                     postTitle={ele.postTitle}
                     postBody={ele.postBody} />
                    )
                })
                
               ):(
                   <div className='no-blogs'>
                     <h4><strong style={{color:"#C89595"}}><i>"Writing is the best way to talk without being interrupted."</i></strong><br/> Start your writing journey here by clicking <strong>Compose</strong> button (top-right-corner).</h4>
                   </div>
                      
               )
               
           }
           </div>
        </div>
    )
}

export default Home;
