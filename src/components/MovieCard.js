import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteMovie, toggleLike, toggleDislike } from '../redux/moviesSlice';
import { Card, CardHeader, CardBody, CardFooter, Button, Title, Category, LikesDislikes, LikeDislikeButton, TextLikeDislike } from '../styles';
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';

const MovieCard = ({ movie }) => {
  const dispatch = useDispatch();

  return (
    <Card>
      <CardHeader>
        <Title>{movie.title}</Title>
        <Category>{movie.category}</Category>
      </CardHeader>
      <CardBody>
        <LikesDislikes>
          <LikeDislikeButton like onClick={() => dispatch(toggleLike(movie.id))}>
            <FaThumbsUp />
          </LikeDislikeButton>
          <LikeDislikeButton onClick={() => dispatch(toggleDislike(movie.id))}>
            <FaThumbsDown />
          </LikeDislikeButton>
        </LikesDislikes>
        <div>
          <TextLikeDislike>{movie.likes} Likes</TextLikeDislike>
          <TextLikeDislike>{movie.dislikes} Dislikes</TextLikeDislike>
        </div>
      </CardBody>
      <CardFooter>
        <Button onClick={() => dispatch(deleteMovie(movie.id))}>Delete</Button>
      </CardFooter>
    </Card>
  );
};

export default MovieCard;
