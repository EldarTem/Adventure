import { defineStore } from "pinia";
import { ElNotification } from "element-plus";
import api from "@/services/api";
import router from "@/router";
import { useUiStore } from "./useUiStore";
import { Comment } from "@/types";

export const useCommentStore = defineStore("comment", {
  state: () => ({
    comments: [] as Comment[],
    comment: null as Comment | null,
  }),

  actions: {
    async createComment(createCommentDto: Partial<Comment>) {
      const uiStore = useUiStore();
      uiStore.showLoader();
      try {
        const response = await api.post("/comments", createCommentDto);
        this.comments.push(response.data.data);
        ElNotification({
          type: "success",
          message: "Comment successfully created",
        });
        router.push("/");
      } catch (error: any) {
        ElNotification({
          type: "error",
          message:
            error.response?.data?.message ||
            "An error occurred while creating the comment",
        });
      } finally {
        uiStore.hideLoader();
      }
    },

    async fetchAllComments() {
      const uiStore = useUiStore();
      uiStore.showLoader();
      try {
        const response = await api.get("/comments");
        this.comments = response.data.data;
      } catch (error: any) {
        ElNotification({
          type: "error",
          message:
            error.response?.data?.message ||
            "An error occurred while fetching comments",
        });
      } finally {
        uiStore.hideLoader();
      }
    },

    async fetchCommentById(id: string) {
      const uiStore = useUiStore();
      uiStore.showLoader();
      try {
        const response = await api.get(`/comments/${id}`);
        this.comment = response.data.data;
      } catch (error: any) {
        ElNotification({
          type: "error",
          message:
            error.response?.data?.message ||
            "An error occurred while fetching the comment",
        });
      } finally {
        uiStore.hideLoader();
      }
    },

    async updateComment(id: string, updateCommentDto: Partial<Comment>) {
      const uiStore = useUiStore();
      uiStore.showLoader();
      try {
        const response = await api.patch(`/comments/${id}`, updateCommentDto);
        const updatedComment = response.data.data;
        this.comments = this.comments.map((comment) =>
          comment.id === id ? updatedComment : comment
        );
        if (this.comment && this.comment.id === id) {
          this.comment = updatedComment;
        }
        ElNotification({
          type: "success",
          message: "Comment successfully updated",
        });
      } catch (error: any) {
        ElNotification({
          type: "error",
          message:
            error.response?.data?.message ||
            "An error occurred while updating the comment",
        });
      } finally {
        uiStore.hideLoader();
      }
    },

    async deleteComment(id: string) {
      const uiStore = useUiStore();
      uiStore.showLoader();
      try {
        await api.delete(`/comments/${id}`);
        this.comments = this.comments.filter((comment) => comment.id !== id);
        ElNotification({
          type: "success",
          message: "Comment successfully deleted",
        });
      } catch (error: any) {
        ElNotification({
          type: "error",
          message:
            error.response?.data?.message ||
            "An error occurred while deleting the comment",
        });
      } finally {
        uiStore.hideLoader();
      }
    },
  },

  getters: {
    getCommentById: (state) => (id: string) =>
      state.comments.find((comment) => comment.id === id),
  },
});
