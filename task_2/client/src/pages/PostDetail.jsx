import React from 'react'
import PostAuthor from '../components/PostAuthor'
import { Link } from 'react-router-dom'
import Thumbnail from '../img/blog22.jpg'

const PostDetail = () => {
  return (
    <section className="post-detail">
      <div className="container post-detail__container">
        <div className="post-detail__header">
          <PostAuthor />
          <div className="post-detail__buttons">
            <Link to={`/posts/werwer/edit`} className='btn sm primary'>Edit</Link>
            <Link to={`/posts/werwer/delete`} className='btn sm danger'>Delete</Link>
          </div>
        </div>
        <h1>This is the post title!</h1>
        <div className="post-detail__thumbnail">
          <img src={Thumbnail} alt="" />
        </div>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non dolore est animi, a eos ullam maxime exercitationem ut ipsam harum vel facere praesentium magnam fugiat iste distinctio necessitatibus nostrum eum illo, porro itaque placeat reprehenderit veritatis! Quis perspiciatis nam commodi?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam reiciendis aliquam, deleniti est molestiae, sint, officia hic fuga unde eaque excepturi quasi dolore debitis voluptatem esse impedit illum consectetur nesciunt voluptate perspiciatis enim nisi? Atque iusto pariatur blanditiis. Deserunt tempora quisquam qui dolor numquam est cupiditate ab. Perferendis, numquam laboriosam itaque neque cupiditate sunt aut?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus ipsa laudantium aliquam ea molestias delectus, harum minima minus aperiam recusandae a quam? Ducimus delectus neque odit explicabo debitis atque, quidem illo velit quae maiores vel, natus aspernatur laboriosam nihil? Repellendus aliquam vero tempora reiciendis magni, debitis dolorum, culpa natus sint nihil nisi asperiores itaque iste impedit atque. Facere ullam velit temporibus iusto molestiae voluptates accusantium. Cum odio, delectus nemo vitae nihil veritatis facere at distinctio accusamus magnam iure? Quod tenetur amet totam, praesentium deleniti, suscipit animi voluptate est explicabo molestias cupiditate magni itaque. Quas nisi consequuntur soluta quo animi dicta itaque, nam nobis eveniet amet magni porro obcaecati corrupti asperiores debitis.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde, reiciendis doloremque enim tenetur provident repellat dolorum iure voluptatibus sequi sapiente!
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro excepturi pariatur dolorem omnis voluptate quo consectetur eum dolorum deleniti officia, debitis dicta atque incidunt nostrum iure nobis sed veritatis exercitationem eos aspernatur tempora. Accusamus eveniet unde obcaecati sint iste eos, quis veritatis, aperiam magnam deserunt recusandae nemo placeat saepe eum omnis sequi tenetur nobis quaerat consequatur vel nostrum vero consequuntur! In expedita totam architecto iste fugiat repellendus error vero perspiciatis eveniet quos esse tempore, consectetur ut eaque, numquam, veniam debitis asperiores saepe ad aliquam adipisci. Impedit omnis nisi temporibus praesentium iure facere dolores. Odit inventore reprehenderit ut vel neque illum voluptatum reiciendis! Officia, dignissimos? Dolor sunt praesentium minima totam laborum fugit necessitatibus ex explicabo facere atque asperiores itaque eveniet nihil eum maxime, consequatur libero corporis quas natus? Doloremque officiis eum molestiae dicta ipsa? Veniam labore iure aliquid! Illum dicta dolor consequuntur quia dolorem voluptate earum fugiat beatae, temporibus sequi eveniet sunt quod magnam praesentium officiis id qui veritatis autem esse quisquam. Aliquam minus temporibus debitis dolorum accusantium reprehenderit. Dicta id eveniet illo animi libero doloremque, deserunt ex quibusdam alias explicabo dignissimos fugiat, consequuntur atque hic expedita a delectus earum odio incidunt eum sint omnis ipsum iusto doloribus? Doloremque, nobis ipsa?
        </p>
      </div>
    </section>
  )
}

export default PostDetail