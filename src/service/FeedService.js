import instance from "./http";

const FeedService = {
  getFeeds() {
    return instance.get("/feed");
  }
};

export default FeedService;
