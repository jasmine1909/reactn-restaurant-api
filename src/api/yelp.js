import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization: `Bearer FDrX5zTdKveeL4xqwjbqmT_4RVm5kZiZ_RqzVm0DJI600lmT2tc3YQIdfmiB_rLQwKzEhZ7vNb07YHmGvvC3PCHIyVgmSGEdyzllBh443WnVA68m1o1HnZoHTkKSYnYx`,
  },
});
