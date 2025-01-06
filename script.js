//your JS code here. If required.
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to AccioJob</title>
    <style>
        /* Body styling for the layout */
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #f4f4f4;
        }
        /* Placeholder styling for h1 (if added dynamically) */
        h1 {
            font-size: 3rem;
            color: #2c3e50;
            text-align: center;
            text-transform: uppercase;
        }
    </style>
</head>
<body>
    <script>
        // Step 1: Create the h1 element
        const heading = document.createElement('h1');

        // Step 2: Set the text content of the h1
        heading.textContent = 'Welcome to Accio Jobs!';

        // Step 3: Add any additional styles directly (optional)
        heading.style.fontSize = '3rem';
        heading.style.color = '#2c3e50';
        heading.style.textAlign = 'center';
        heading.style.textTransform = 'uppercase';

        // Step 4: Append the h1 to the body
        document.body.appendChild(heading);
    </script>
</body>
</html>
