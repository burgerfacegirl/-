package com.osakak.jusangnakwon.domain.feed.application;

import com.osakak.jusangnakwon.common.errors.FeedNotFoundException;
import com.osakak.jusangnakwon.common.errors.UserNotFoundException;
import com.osakak.jusangnakwon.domain.feed.dao.CommentRepository;
import com.osakak.jusangnakwon.domain.feed.dao.FeedRepository;
import com.osakak.jusangnakwon.domain.feed.dao.LikeRepository;
import com.osakak.jusangnakwon.domain.feed.dao.RatingRepository;
import com.osakak.jusangnakwon.domain.feed.dto.CommentDto;
import com.osakak.jusangnakwon.domain.feed.dto.FeedDto;
import com.osakak.jusangnakwon.domain.feed.dto.RatingDto;
import com.osakak.jusangnakwon.domain.feed.entity.Comment;
import com.osakak.jusangnakwon.domain.feed.entity.Feed;
import com.osakak.jusangnakwon.domain.feed.entity.Like;
import com.osakak.jusangnakwon.domain.feed.entity.Rating;
import com.osakak.jusangnakwon.domain.feed.mapper.FeedMapper;
import com.osakak.jusangnakwon.domain.user.dao.UserRepository;
import com.osakak.jusangnakwon.domain.user.entity.User;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.mapstruct.factory.Mappers;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class FeedService {

    private final FeedRepository feedRepository;
    private final UserRepository userRepository;
    private final RatingRepository ratingRepository;
    private final CommentRepository commentRepository;
    private final LikeRepository likeRepository;

    private final FeedMapper feedMapper = Mappers.getMapper(FeedMapper.class);

    @Transactional
    public FeedDto createFeed(Long id, FeedDto feedDto, RatingDto ratingDto) {
        User user = findUser(id);
        Feed feed = feedMapper.feedDtoToFeed(feedDto, user);
        Double ratingScore = feedDto.getRatingScore();
        feed = feedRepository.save(feed);
        if ("리뷰글".equals(feed.getType())) {
            Rating rating = feedMapper.ratingDtoToRating(ratingDto, user);
            ratingRepository.save(rating);
        }
        feedDto = feedMapper.feedToFeedDto(feed);
        feedDto.setLikeCnt(Long.parseLong("0"));
        feedDto.setLiked(false);
        feedDto.setRatingScore(ratingScore);
        return feedDto;
    }

    public List<FeedDto> getFeedList(Long id) {
        User user = findUser(id);
        List<FeedDto> feeds = feedRepository.findFeedListWithRatingAndLike(user.getId());
        return feeds;
    }

    public List<FeedDto> getFeedListByType(Long id, String type) {
        User user = findUser(id);
        List<FeedDto> feeds = feedRepository.findFeedListWithRatingAndLikeByType(user.getId(),
                type);
        return feeds;
    }

    public FeedDto getFeedDetail(Long id, Long feedId) {
        User user = findUser(id);
        FeedDto feedDto = feedRepository.findFeedWithRatingAndLike(user.getId(), feedId);
        List<CommentDto> comments = feedRepository.findCommentListByFeedId(feedId);
        feedDto.setComments(comments);
        return feedDto;
    }

    @Transactional
    public List<CommentDto> createComment(Long id, CommentDto commentDto) {
        User user = findUser(id);
        Long feedId = commentDto.getFeedId();
        Feed feed = findFeed(feedId);
        Comment comment = feedMapper.commentDtoToComment(commentDto, user, feed);
        commentRepository.save(comment);
        return feedRepository.findCommentListByFeedId(feedId);
    }

    @Transactional
    public void updateLike(Long id, Long feedId, Boolean isLiked) {
        User user = findUser(id);
        Feed feed = findFeed(feedId);
        likeRepository.findByUserIdAndFeedId(id, feedId)
                .ifPresentOrElse(like -> like.setLiked(isLiked), () -> {
                    Like like = Like.builder().user(user).feed(feed).isLiked(isLiked).build();
                    likeRepository.save(like);
                });
    }

    private User findUser(Long id) {
        return userRepository.findById(id).orElseThrow(() -> new UserNotFoundException(id));
    }

    private Feed findFeed(Long id) {
        return feedRepository.findById(id).orElseThrow(() -> new FeedNotFoundException(id));
    }
}