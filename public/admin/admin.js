netlifyIdentity.on("init", user => {
    if (!user) {
      window.location.href = "/";
      return;
    }
  
    const roles = user.app_metadata?.roles || [];
  
    if (!roles.includes("admin")) {
      alert("Access denied");
      window.location.href = "/";
    }
  });
  