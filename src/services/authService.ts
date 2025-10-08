import type { AuthFormData, RegisterFormData } from "../types";

// Use Vite-style environment variable
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export interface RegisterResult {
  success: boolean;
  error?: string;
  user?: any;
}

// ==================== LOGIN ====================
export const login = async (data: AuthFormData): Promise<boolean> => {
  try {
    const response = await fetch(`${API_BASE_URL}/users/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: data.email,
        password: data.password,
      }),
    });

    const result = await response.json();

    if (!response.ok) {
      console.error('Login failed:', result.message);
      return false;
    }

    // Store user data after successful login
    if (result.user && typeof window !== "undefined") {
      localStorage.setItem("currentUser", JSON.stringify(result.user));
    }

    return true;
  } catch (error) {
    console.error('Login error:', error);
    return false;
  }
};

// ==================== REGISTER ====================
export const register = async (data: RegisterFormData): Promise<RegisterResult> => {
  try {
    const response = await fetch(`${API_BASE_URL}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
      return {
        success: false,
        error: result.message || 'Registration failed. Please try again.',
      };
    }

    return {
      success: true,
      user: result.user,
    };
  } catch (error) {
    console.error('Registration error:', error);
    return {
      success: false,
      error: 'Network error. Please check your connection and try again.',
    };
  }
};


// ==================== FARMER API ====================
// Optional helper if you want to fetch or create farmers

export const createFarmer = async (farmerData: any) => {
  try {
    const response = await fetch(`${API_BASE_URL}/farmers`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(farmerData),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || "Error creating farmer");
    }

    return result;
  } catch (error: any) {
    console.error("❌ Error creating farmer:", error);
    throw error;
  }
};

export const getFarmers = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/farmers`);
    if (!response.ok) throw new Error("Failed to fetch farmers");
    return await response.json();
  } catch (error) {
    console.error("❌ Error fetching farmers:", error);
    throw error;
  }
};
