import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const mockTestimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    avatar: "SC",
    prevRole: "Marketing Manager @ FMCG Corp",
    currentRole: "Product Manager @ Stripe",
    company: "Stripe",
    timeframe: "5 months",
    salaryIncrease: "+$42K",
    quote:
      "I was stuck in traditional marketing for 7 years with zero tech background. This program gave me the exact roadmap, from understanding APIs to acing PM interviews. I got 3 offers and chose Stripe. Life-changing doesn't even cover it.",
    rating: 5,
    color: "from-violet-500 to-indigo-600",
  },
  {
    id: 2,
    name: "Marcus Williams",
    avatar: "MW",
    prevRole: "Brand Manager @ CPG Company",
    currentRole: "Associate PM @ Shopify",
    company: "Shopify",
    timeframe: "6 months",
    salaryIncrease: "+$35K",
    quote:
      "Everyone told me I needed a CS degree to break into tech product. This coaching destroyed that myth. The structured approach to building a portfolio and networking in tech circles was exactly what I needed to land my dream role.",
    rating: 5,
    color: "from-emerald-500 to-teal-600",
  },
  {
    id: 3,
    name: "Priya Nair",
    avatar: "PN",
    prevRole: "Digital Marketing Lead @ Agency",
    currentRole: "Growth PM @ Series B Startup",
    company: "YC-backed Startup",
    timeframe: "4 months",
    salaryIncrease: "+$28K",
    quote:
      "The 1-on-1 coaching sessions cut through all the noise. Instead of generic advice, I got a personalized strategy based on my marketing background. Used my analytics experience as a superpower, not a weakness. Hired in 4 months.",
    rating: 5,
    color: "from-pink-500 to-rose-600",
  },
];

export const fetchTestimonials = createAsyncThunk(
  "testimonials/fetch",
  async () => {
    // Simulated API call
    await new Promise((resolve) => setTimeout(resolve, 800));
    return mockTestimonials;
  }
);

const testimonialsSlice = createSlice({
  name: "testimonials",
  initialState: {
    data: [],
    status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTestimonials.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTestimonials.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchTestimonials.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const selectTestimonials = (state) => state.testimonials.data;
export const selectTestimonialsStatus = (state) => state.testimonials.status;

export default testimonialsSlice.reducer;
