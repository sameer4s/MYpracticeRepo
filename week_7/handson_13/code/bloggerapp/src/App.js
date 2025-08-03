import React from 'react';
import './App.css';
import { books } from './data/books';
import { blogs } from './data/blogs';
import { courses } from './data/courses';

function App() {
  const bookdet = books.map((book) => (
    <p key={book.id}>
      <strong>{book.bname}</strong><br />
      {book.price}
    </p>
  ));

  const content = blogs.map((blog, index) => (
    <div key={index}>
      <p><strong>{blog.title}</strong></p>
      <p>{blog.author}</p>
      <p className="highlight">{blog.content}</p>
    </div>
  ));

  const coursedet = courses.map((course, index) => (
    <p key={index}>
      <strong>{course.cname}</strong><br />
      {course.date}
    </p>
  ));

  return (
    <div>
      <div className="container ">
      <div className="mystyle1">
          <h1>Course Details</h1>
          {coursedet}
        </div>
         <div className="st2 card">
          <h1>Book Details</h1>
          {bookdet}
        </div>
      <div className="v1 card">
        <h1>Blog Details</h1>
        {content}
      </div>
      </div>



    </div>
  );
}

export default App;
