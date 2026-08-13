const defaultEmail = "mspriya@13";
const defaultPassword = "1336";
const passwordKey = "portfolioLoginPassword";

function getSavedPassword() {
  return localStorage.getItem(passwordKey) || defaultPassword;
}

function setSavedPassword(password) {
  localStorage.setItem(passwordKey, password);
}

function togglePassword() {
  const passwordField = document.getElementById("password");
  if (passwordField.type === "password") {
    passwordField.type = "text";
  } else {
    passwordField.type = "password";
  }
}

function togglePasswordFields(containerId, show) {
  const container = document.getElementById(containerId);
  if (!container) return;
  const passwordFields = container.querySelectorAll("input[type='password']");
  passwordFields.forEach((field) => {
    field.type = show ? "text" : "password";
  });
}

function setPanelVisible(panelId, visible) {
  const panel = document.getElementById(panelId);
  if (!panel) return;
  if (visible) {
    panel.classList.remove("hidden");
  } else {
    panel.classList.add("hidden");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const forgotLink = document.getElementById("forgotLink");
  const loginPanel = document.getElementById("loginPanel");
  const forgotPanel = document.getElementById("forgotPanel");
  const showForgotPasswords = document.getElementById("show-forgot-passwords");
  const forgotUpdateBtn = document.getElementById("forgotUpdateBtn");
  const backToLoginBtn = document.getElementById("backToLoginBtn");
  const loginForm = document.getElementById("loginForm");
  const errorMessage = document.getElementById("error-message");

  if (forgotLink) {
    forgotLink.addEventListener("click", () => {
      setPanelVisible("loginPanel", false);
      setPanelVisible("forgotPanel", true);
      errorMessage.textContent = "";
      const forgotMessage = document.getElementById("forgot-message");
      if (forgotMessage) {
        forgotMessage.textContent = "";
      }
    });
  }

  if (showForgotPasswords) {
    showForgotPasswords.addEventListener("change", function () {
      togglePasswordFields("forgotPanel", this.checked);
    });
  }

  if (forgotUpdateBtn) {
    forgotUpdateBtn.addEventListener("click", () => {
      const email = document.getElementById("email").value.trim();
      const newPassword = document.getElementById("forgot-new-password").value;
      const confirmPassword = document.getElementById("forgot-confirm-password").value;
      const forgotMessage = document.getElementById("forgot-message");

      errorMessage.textContent = "";
      forgotMessage.textContent = "";

      if (email !== defaultEmail) {
        forgotMessage.textContent = "Enter the correct email to reset the password.";
        forgotMessage.style.color = "#ff4d4d";
        return;
      }

      if (!newPassword || !confirmPassword) {
        forgotMessage.textContent = "Please fill in both password fields.";
        forgotMessage.style.color = "#ff4d4d";
        return;
      }

      if (newPassword !== confirmPassword) {
        forgotMessage.textContent = "Passwords do not match.";
        forgotMessage.style.color = "#ff4d4d";
        return;
      }

      setSavedPassword(newPassword);
      forgotMessage.textContent = "Password changed successfully!";
      forgotMessage.style.color = "#8fbc8f";
    });
  }

  if (backToLoginBtn) {
    backToLoginBtn.addEventListener("click", () => {
      setPanelVisible("forgotPanel", false);
      setPanelVisible("loginPanel", true);
      const forgotMessage = document.getElementById("forgot-message");
      forgotMessage.textContent = "";
      document.getElementById("forgot-new-password").value = "";
      document.getElementById("forgot-confirm-password").value = "";
      document.getElementById("show-forgot-passwords").checked = false;
      togglePasswordFields("forgotPanel", false);
    });
  }

  if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value;

      if (email === defaultEmail && password === getSavedPassword()) {
        alert("Login successful!");
        window.location.href = "portfolio.html";
      } else {
        errorMessage.textContent = "Invalid email or password!";
      }
    });
  }
});

