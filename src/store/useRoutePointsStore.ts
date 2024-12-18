import { defineStore } from "pinia";
import { ElNotification } from "element-plus";
import api from "@/services/api";
import router from "@/router";
import { useUiStore } from "./useUiStore";
import { RoutePoint } from "@/types";

export const useRoutePointStore = defineStore("routePoint", {
  state: () => ({
    routePoints: [] as RoutePoint[],
    routePoint: null as RoutePoint | null,
  }),

  actions: {
    async createRoutePoint(createRoutePointDto: Partial<RoutePoint>) {
      const uiStore = useUiStore();
      uiStore.showLoader();
      try {
        const response = await api.post("/route-point", createRoutePointDto);
        this.routePoints.push(response.data.data);
        ElNotification({
          type: "success",
          message: "Route point successfully created",
        });
        router.push("/");
      } catch (error: any) {
        ElNotification({
          type: "error",
          message:
            error.response?.data?.message ||
            "An error occurred while creating the route point",
        });
      } finally {
        uiStore.hideLoader();
      }
    },

    async fetchAllRoutePoints() {
      const uiStore = useUiStore();
      uiStore.showLoader();
      try {
        const response = await api.get("/route-point");
        this.routePoints = response.data.data;
      } catch (error: any) {
        ElNotification({
          type: "error",
          message:
            error.response?.data?.message ||
            "An error occurred while fetching route points",
        });
      } finally {
        uiStore.hideLoader();
      }
    },

    async fetchRoutePointById(id: number) {
      const uiStore = useUiStore();
      uiStore.showLoader();
      try {
        const response = await api.get(`/route-point/${id}`);
        this.routePoint = response.data.data;
      } catch (error: any) {
        ElNotification({
          type: "error",
          message:
            error.response?.data?.message ||
            "An error occurred while fetching the route point",
        });
      } finally {
        uiStore.hideLoader();
      }
    },

    async updateRoutePoint(
      id: number,
      updateRoutePointDto: Partial<RoutePoint>
    ) {
      const uiStore = useUiStore();
      uiStore.showLoader();
      try {
        const response = await api.patch(
          `/route-point/${id}`,
          updateRoutePointDto
        );
        const updatedRoutePoint = response.data.data;
        this.routePoints = this.routePoints.map((routePoint) =>
          routePoint.id === id ? updatedRoutePoint : routePoint
        );
        if (this.routePoint && this.routePoint.id === id) {
          this.routePoint = updatedRoutePoint;
        }
        ElNotification({
          type: "success",
          message: "Route point successfully updated",
        });
      } catch (error: any) {
        ElNotification({
          type: "error",
          message:
            error.response?.data?.message ||
            "An error occurred while updating the route point",
        });
      } finally {
        uiStore.hideLoader();
      }
    },

    async deleteRoutePoint(id: number) {
      const uiStore = useUiStore();
      uiStore.showLoader();
      try {
        await api.delete(`/route-point/${id}`);
        this.routePoints = this.routePoints.filter(
          (routePoint) => routePoint.id !== id
        );
        ElNotification({
          type: "success",
          message: "Route point successfully deleted",
        });
      } catch (error: any) {
        ElNotification({
          type: "error",
          message:
            error.response?.data?.message ||
            "An error occurred while deleting the route point",
        });
      } finally {
        uiStore.hideLoader();
      }
    },
  },

  getters: {
    getRoutePointById: (state) => (id: number) =>
      state.routePoints.find((routePoint) => routePoint.id === id),
  },
});
