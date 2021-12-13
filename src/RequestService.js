import axios from 'axios';
const url = 'http://localhost:4000/api/posts/';

class RequestServie{
    //get
    static retrievePosts(){
        return new Promise(async(resolve, reject)=>{
            try{
                const res = await axios.get(url);
                const data = res.data;
                resolve(
                    data.map(post =>({
                        ...post,createdAt: new Date(post.createdAt)
                    }))
                );
            } catch(err){
                reject(err)
            }
        });
        
    }
    //create
    static Postinsert(text){
        return axios.post(url,{
            text
        });
    }
    //delete
    static Postdelete(id){
        return axios.delete('${url}${id}');
    }
}

export default RequestServie;