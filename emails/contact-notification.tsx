import * as React from "react";

interface ContactNotificationProps {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

export function ContactNotification({
  name,
  email,
  phone,
  message,
}: ContactNotificationProps) {
  return (
    <div
      style={{
        fontFamily: "Arial, Helvetica, sans-serif",
        maxWidth: "600px",
        margin: "0 auto",
        padding: "24px",
        color: "#1a1a1a",
      }}
    >
      <h1
        style={{
          fontSize: "24px",
          fontWeight: "bold",
          marginBottom: "24px",
          borderBottom: "2px solid #e5e5e5",
          paddingBottom: "12px",
        }}
      >
        New Contact Form Submission
      </h1>

      <div style={{ marginBottom: "16px" }}>
        <strong style={{ display: "block", marginBottom: "4px" }}>Name</strong>
        <span>{name}</span>
      </div>

      <div style={{ marginBottom: "16px" }}>
        <strong style={{ display: "block", marginBottom: "4px" }}>Email</strong>
        <a href={`mailto:${email}`} style={{ color: "#2563eb" }}>
          {email}
        </a>
      </div>

      {phone && (
        <div style={{ marginBottom: "16px" }}>
          <strong style={{ display: "block", marginBottom: "4px" }}>
            Phone
          </strong>
          <span>{phone}</span>
        </div>
      )}

      <div style={{ marginBottom: "24px" }}>
        <strong style={{ display: "block", marginBottom: "4px" }}>
          Message
        </strong>
        <p
          style={{
            margin: 0,
            whiteSpace: "pre-wrap",
            lineHeight: "1.6",
          }}
        >
          {message}
        </p>
      </div>

      <hr style={{ border: "none", borderTop: "1px solid #e5e5e5" }} />

      <p
        style={{
          fontSize: "12px",
          color: "#6b7280",
          marginTop: "16px",
        }}
      >
        This email was sent from the B4Digital website contact form.
      </p>
    </div>
  );
}
