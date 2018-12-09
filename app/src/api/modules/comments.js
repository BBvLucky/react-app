import { request } from "../request.js";
import moment from "moment";

export const fetchComments = () => {
  return request({
    url: "comments"
  }).then(response => {
    return response.data.sort((comment1, comment2) => {
      return moment.utc(comment1.addedDate).isAfter(moment.utc(comment2.addedDate)) ? -1 : 1;
    });
  });
};

export const addComment = commentData => {
  return request({
    method: "post",
    url: "add_comment",
    data: commentData
  }).then(response => response.data)
};
