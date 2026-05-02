# Facebook Login Page - Test Plan for Automation

## Overview
This test plan covers comprehensive testing of the Facebook login functionality, including happy paths, error handling, validation, security, and accessibility scenarios.

**URL:** https://www.facebook.com/login
**Scope:** Login form and related UI elements
**Test Priority:** Critical
**Estimated Duration:** 4-6 hours for full execution

---

## Test Environment & Prerequisites

- **Browser:** Chromium/Firefox/WebKit
- **Base URL:** https://www.facebook.com/login
- **Test Data:** Non-real user accounts for testing
- **Assumptions:** 
  - Page loads within 5 seconds
  - No geographic restrictions
  - JavaScript enabled
  - Cookies/Storage enabled

---

## UI Elements Identified

| Element | Type | Selector Pattern | Purpose |
|---------|------|------------------|---------|
| Email/Phone Input | TextBox | textbox "Email address or mobile number" | Primary credential input |
| Password Input | TextBox | textbox "Password" | Secondary credential input |
| Login Button | Button | button "Log in" | Submit login form |
| Forgotten Password Link | Link | link "Forgotten password?" | Password recovery |
| Create Account Link | Link | link "Create new account" | New user registration |
| Page Title | Text | "Log in to Facebook" | Page identification |

---

## Test Scenarios

### 1. Happy Path Tests

#### 1.1 Successful Login with Email
**Scenario:** User logs in with valid email and password
**Prerequisites:** Valid test account exists
**Steps:**
1. Navigate to https://www.facebook.com/login
2. Enter valid email address in email field
3. Enter correct password in password field
4. Click "Log in" button
5. Wait for redirect (max 10 seconds)
**Expected Result:** User is logged in and redirected to home feed
**Acceptance Criteria:** URL changes to home page; user dashboard visible

#### 1.2 Successful Login with Phone Number
**Scenario:** User logs in with phone number instead of email
**Prerequisites:** Valid test account with phone number
**Steps:**
1. Navigate to https://www.facebook.com/login
2. Enter valid phone number in email/phone field
3. Enter correct password
4. Click "Log in" button
5. Wait for redirect
**Expected Result:** User is logged in successfully
**Acceptance Criteria:** Same as 1.1

#### 1.3 Case-Insensitive Email Login
**Scenario:** Email login accepts various cases
**Prerequisites:** Test account with email user@example.com
**Steps:**
1. Navigate to login page
2. Enter email as "USER@EXAMPLE.COM" (uppercase)
3. Enter correct password
4. Click "Log in"
**Expected Result:** Login succeeds
**Acceptance Criteria:** Email is treated case-insensitively

---

### 2. Validation Tests

#### 2.1 Empty Email Field Validation
**Scenario:** Form rejects submission with empty email
**Steps:**
1. Navigate to login page
2. Leave email field empty
3. Enter any password
4. Click "Log in"
**Expected Result:** Form validation error or request rejection
**Acceptance Criteria:** Login not submitted; user notified

#### 2.2 Empty Password Field Validation
**Scenario:** Form rejects submission with empty password
**Steps:**
1. Navigate to login page
2. Enter valid email
3. Leave password field empty
4. Click "Log in"
**Expected Result:** Form validation error
**Acceptance Criteria:** Login not submitted

#### 2.3 Both Fields Empty
**Scenario:** Form rejects submission with both fields empty
**Steps:**
1. Navigate to login page
2. Leave both fields empty
3. Click "Log in"
**Expected Result:** Form validation error
**Acceptance Criteria:** Cannot proceed without inputs

#### 2.4 Invalid Email Format
**Scenario:** System rejects invalid email format
**Steps:**
1. Navigate to login page
2. Enter invalid email (no @ symbol): "invaliduser"
3. Enter password
4. Click "Log in"
**Expected Result:** Validation error shown
**Acceptance Criteria:** Request rejected or error displayed

#### 2.5 Special Characters in Email
**Scenario:** Email with special characters is handled
**Steps:**
1. Enter email with special chars: "user+test@example.com"
2. Enter valid password
3. Click "Log in"
**Expected Result:** Accepted as valid format or rejected with clear message
**Acceptance Criteria:** Consistent behavior

---

### 3. Error Handling Tests

#### 3.1 Wrong Password
**Scenario:** Login fails with incorrect password
**Prerequisites:** Valid account credentials known
**Steps:**
1. Navigate to login page
2. Enter valid email
3. Enter incorrect password
4. Click "Log in"
5. Observe error message
**Expected Result:** Error message: "Invalid email or password"
**Acceptance Criteria:** Login denied; specific error shown; attempt not logged as breach

#### 3.2 Non-existent User
**Scenario:** Login fails for non-existent account
**Steps:**
1. Navigate to login page
2. Enter non-existent email: "nonexistent123456@example.com"
3. Enter any password
4. Click "Log in"
**Expected Result:** Same error message as wrong password (security best practice)
**Acceptance Criteria:** No user enumeration vulnerability

#### 3.3 Account Locked After Failed Attempts
**Scenario:** Account temporarily locks after multiple failed attempts
**Prerequisites:** Knowledge of account lockout policy
**Steps:**
1. Make multiple (e.g., 5) failed login attempts
2. Attempt login again with correct credentials
**Expected Result:** Access denied with lock message OR can login successfully
**Acceptance Criteria:** Clear message if locked

#### 3.4 Network Error Handling
**Scenario:** System handles network failures gracefully
**Steps:**
1. Navigate to login page
2. Disconnect network
3. Enter valid credentials
4. Click "Log in"
5. Reconnect network
**Expected Result:** Error message about network issue OR automatic retry
**Acceptance Criteria:** User informed of network problem

---

### 4. Security Tests

#### 4.1 SQL Injection Prevention - Email Field
**Scenario:** System safely rejects SQL injection attempts
**Steps:**
1. Navigate to login page
2. Enter: `' OR '1'='1`
3. Enter password
4. Click "Log in"
**Expected Result:** Treated as literal string; login fails safely
**Acceptance Criteria:** No SQL injection occurs; secure handling

#### 4.2 XSS Prevention - Email Field
**Scenario:** System prevents XSS attacks
**Steps:**
1. Navigate to login page
2. Enter: `<script>alert('xss')</script>`
3. Enter password
4. Click "Log in"
**Expected Result:** No script executes; treated as text
**Acceptance Criteria:** XSS prevented; no console errors

#### 4.3 XSS Prevention - Password Field
**Scenario:** Password field prevents XSS
**Steps:**
1. Navigate to login page
2. Enter email
3. In password field enter: `<script>alert('xss')</script>`
4. Click "Log in"
**Expected Result:** No script executes
**Acceptance Criteria:** Input safely escaped/sanitized

#### 4.4 Password Field Masking
**Scenario:** Password is masked in UI
**Steps:**
1. Navigate to login page
2. Click password field
3. Enter: "testpassword123"
4. Observe field content
**Expected Result:** Characters shown as dots/asterisks, not plain text
**Acceptance Criteria:** Password not visible; masked input

#### 4.5 HTTPS Requirement
**Scenario:** Login page uses HTTPS
**Steps:**
1. Note page URL
2. Verify certificate validity
**Expected Result:** Page served via HTTPS; valid certificate
**Acceptance Criteria:** Secure connection; no mixed content

---

### 5. UI/UX Tests

#### 5.1 Element Visibility
**Scenario:** All required elements are visible
**Steps:**
1. Navigate to login page
2. Check visibility of: email field, password field, login button, forgot password link, create account link
**Expected Result:** All elements visible and accessible
**Acceptance Criteria:** No hidden or cut-off elements

#### 5.2 Placeholder Text
**Scenario:** Input fields have helpful placeholders
**Steps:**
1. Navigate to login page
2. Observe email field placeholder
3. Observe password field placeholder
**Expected Result:** Clear placeholder text guides users
**Acceptance Criteria:** Placeholders are descriptive

#### 5.3 Button State - Normal
**Scenario:** Login button displays correctly in normal state
**Steps:**
1. Navigate to login page
2. Observe login button
**Expected Result:** Button is enabled, visible, and clickable
**Acceptance Criteria:** Button styling is clear and inviting

#### 5.4 Button State - Hover
**Scenario:** Login button shows hover state
**Steps:**
1. Navigate to login page
2. Hover over login button
**Expected Result:** Button changes appearance (color/shadow/scale)
**Acceptance Criteria:** Visual feedback on hover

#### 5.5 Focus States
**Scenario:** Form fields show focus indicators
**Steps:**
1. Navigate to login page
2. Click email field - observe focus
3. Press Tab - observe password field focus
4. Press Tab - observe button focus
**Expected Result:** Clear visual indication of focused element
**Acceptance Criteria:** Outline or color change visible

---

### 6. Accessibility Tests

#### 6.1 Keyboard Navigation
**Scenario:** Form is fully navigable with keyboard
**Steps:**
1. Navigate to login page
2. Press Tab to cycle through focusable elements
3. Verify order: Email → Password → Login → Forgot password → Create account
4. Verify elements are reachable
**Expected Result:** All elements focused via Tab
**Acceptance Criteria:** No keyboard trap; logical tab order

#### 6.2 Screen Reader Compatibility
**Scenario:** Form is usable with screen readers
**Steps:**
1. Navigate to login page
2. Enable screen reader (NVDA/JAWS)
3. Navigate page and read elements
**Expected Result:** Labels, buttons, links properly announced
**Acceptance Criteria:** Clear descriptions for all interactive elements

#### 6.3 Form Labels
**Scenario:** Input fields have associated labels
**Steps:**
1. Navigate to login page
2. Check that email field has label "Email address or mobile number"
3. Check that password field has label "Password"
**Expected Result:** Labels associated with inputs
**Acceptance Criteria:** Accessible via screen readers

#### 6.4 Button Text Clarity
**Scenario:** Button text is clear and descriptive
**Steps:**
1. Navigate to login page
2. Verify button text is "Log in"
**Expected Result:** Clear, actionable text
**Acceptance Criteria:** No abbreviations or unclear wording

---

### 7. Responsive Design Tests

#### 7.1 Mobile Viewport (375x667)
**Scenario:** Login page displays correctly on mobile
**Steps:**
1. Set viewport to 375x667
2. Navigate to login page
3. Verify layout, input fields, button are properly sized
4. Verify no horizontal scrolling
5. Verify text is readable
**Expected Result:** Responsive layout; touch-friendly inputs
**Acceptance Criteria:** All elements accessible on mobile

#### 7.2 Tablet Viewport (768x1024)
**Scenario:** Login page displays correctly on tablet
**Steps:**
1. Set viewport to 768x1024
2. Navigate to login page
3. Verify layout is balanced and centered
4. Verify inputs are large enough
**Expected Result:** Tablet-optimized layout
**Acceptance Criteria:** Good UX on tablet size

#### 7.3 Desktop Viewport (1920x1080)
**Scenario:** Login page displays correctly on desktop
**Steps:**
1. Set viewport to 1920x1080
2. Navigate to login page
3. Verify centered layout, good spacing
**Expected Result:** Proper layout on large screen
**Acceptance Criteria:** Not stretched; readable

---

### 8. Page Load Tests

#### 8.1 Page Load Time
**Scenario:** Page loads within acceptable time
**Steps:**
1. Navigate to login page
2. Measure time until page is interactive
**Expected Result:** Page loads within 5 seconds
**Acceptance Criteria:** Good performance; no blocking

#### 8.2 No Console Errors
**Scenario:** No JavaScript errors on page load
**Steps:**
1. Navigate to login page
2. Open developer console
3. Check for errors
**Expected Result:** Console is clean; no errors
**Acceptance Criteria:** No blocking errors; warnings acceptable

#### 8.3 Already Logged-in Redirect
**Scenario:** Logged-in users are redirected from login page
**Prerequisites:** User is already authenticated
**Steps:**
1. Ensure logged-in session exists
2. Navigate to https://www.facebook.com/login
**Expected Result:** Redirected to home/feed page
**Acceptance Criteria:** Cannot access login page if already logged in

---

### 9. Navigation Tests

#### 9.1 Forgotten Password Link
**Scenario:** "Forgotten password?" link navigates to recovery page
**Steps:**
1. Navigate to login page
2. Click "Forgotten password?" link
3. Wait for page load
**Expected Result:** Navigated to password recovery page
**Acceptance Criteria:** URL changes; recovery form visible

#### 9.2 Create New Account Link
**Scenario:** "Create new account" link navigates to signup
**Steps:**
1. Navigate to login page
2. Click "Create new account" link
3. Wait for page load
**Expected Result:** Navigated to registration page
**Acceptance Criteria:** URL changes; signup form visible

#### 9.3 Language Selection
**Scenario:** User can change language from login page
**Steps:**
1. Navigate to login page
2. Locate language selector
3. Select different language (e.g., Hindi)
4. Observe page update
**Expected Result:** Page content translated
**Acceptance Criteria:** Language preference applied

---

### 10. Data Handling Tests

#### 10.1 Long Input Handling - Email
**Scenario:** System handles very long email input
**Steps:**
1. Navigate to login page
2. Enter email with 500+ characters
3. Click "Log in"
**Expected Result:** Input truncated or error message shown
**Acceptance Criteria:** No crash; graceful handling

#### 10.2 Special Characters in Password
**Scenario:** Password with special characters works
**Prerequisites:** Account with special char password
**Steps:**
1. Navigate to login page
2. Enter email
3. Enter password with special chars: "P@ssw0rd!#$%"
4. Click "Log in"
**Expected Result:** Login succeeds if credentials correct
**Acceptance Criteria:** Special chars handled properly

#### 10.3 Whitespace Trimming
**Scenario:** System trims whitespace from inputs
**Steps:**
1. Navigate to login page
2. Enter email with spaces: "  user@example.com  "
3. Enter password
4. Click "Log in"
**Expected Result:** Whitespace trimmed; login processed
**Acceptance Criteria:** Credentials work despite whitespace

#### 10.4 Clipboard Paste - Email
**Scenario:** User can paste email from clipboard
**Steps:**
1. Copy email to clipboard
2. Navigate to login page
3. Click email field
4. Paste (Ctrl+V)
**Expected Result:** Email pasted successfully
**Acceptance Criteria:** Paste works; email populated

#### 10.5 Clipboard Paste - Password
**Scenario:** User can paste password from clipboard
**Steps:**
1. Copy password to clipboard
2. Navigate to login page
3. Click password field
4. Paste (Ctrl+V)
**Expected Result:** Password pasted successfully
**Acceptance Criteria:** Password field accepts paste; not masked in field

---

## Test Execution Strategy

### Execution Order
1. Happy Path tests (validates basic functionality)
2. Validation tests (ensures form rules work)
3. Error Handling tests (verifies error scenarios)
4. Security tests (ensures protection)
5. UI/UX tests (verifies appearance)
6. Accessibility tests (ensures usability)
7. Responsive tests (cross-device compatibility)
8. Page Load tests (performance)
9. Navigation tests (link functionality)
10. Data Handling tests (input processing)

### Execution Frequency
- **Happy Path:** On every build (smoke test)
- **Validation & Error:** Every sprint
- **Security:** Monthly security audit
- **Accessibility:** Quarterly accessibility review
- **Full Suite:** Before major releases

### Browsers to Test
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

### Devices to Test
- Desktop (1920x1080)
- Laptop (1366x768)
- Tablet (768x1024)
- Mobile (375x667)

---

## Risk Assessment

| Risk | Severity | Mitigation |
|------|----------|-----------|
| Account lockout on failed attempts | High | Use non-critical test accounts |
| Rate limiting | Medium | Space out test executions |
| Credential exposure in logs | Critical | Never log actual passwords |
| Network connectivity | Medium | Test with network monitoring |
| Session timeout | Low | Account for timeouts in waits |

---

## Success Criteria

- All 40+ scenarios execute without errors
- No security vulnerabilities found
- Page loads within 5 seconds
- Keyboard navigation fully functional
- No console errors in development mode
- Responsive on all tested viewports
- Accessibility score >90 (WAVE/Axe)

---

## Notes

- Use dedicated test accounts for automation
- Never commit real passwords to repository
- Implement proper wait strategies (avoid fixed waits)
- Screenshot on failure for debugging
- Monitor test execution for flaky patterns
- Keep test plan in sync with application changes
