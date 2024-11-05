import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  IconButton,
  Rating,
} from "@mui/material";
import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

const RatingDialog = ({ isOpen, setIsOpen }) => {
  const [review, setReview] = useState({ rating: 0, text: "" });
  return (
    <>
      <Dialog open={isOpen} fullWidth>
        <DialogTitle
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0px 15px",
            margin: 0,
          }}
        >
          <h4 style={{ fontSize: "15px", fontWeight: "700" }}>Add a Review</h4>
          <IconButton onClick={() => setIsOpen(false)}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <Divider />
        <DialogContent>
          <Rating
            style={{}}
            size="medium"
            value={review.ratingVal}
            onChange={(e) => setReview({ ...review, rating: e.target.value })}
          />
          <p style={{ padding: "3px 3px", margin: 0, fontSize: "14px" }}>
            Add a Comment :
          </p>
          <textarea
            onChange={(e) => setReview({ ...review, text: e.target.value })}
            rows={10}
            style={{ width: "100%" }}
          ></textarea>
        </DialogContent>
        <DialogActions>
          <button
          onClick={() => setIsOpen(false)}
            style={{
              border: "0px",
              padding: "7px 12px",
              fontSize: "15px",
              fontWeight: "400",
              borderRadius: "8px",
              backgroundColor: "#6A5ACD",
              color: "#ffffff",
              cursor: "pointer"
            }}
          >
            SUBMIT
          </button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default RatingDialog;
