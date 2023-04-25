# Getting Started with Supabase
Supabase is an open source platform that provides a backend as a service (BaaS) for your applications. It allows you to easily build scalable and secure web and mobile applications by providing all the necessary infrastructure and tools.

### Prerequisites
Before you get started with Supabase, you will need:

- A Supabase account. You can sign up for a free account at https://app.supabase.com.

### Step 1: Create a New Project
After signing up for an account, you can create a new project by clicking on the "Create a new project" button on the dashboard.

### Step 2: Configure Your Project
Once you have created a new project, you will need to configure it. This involves setting up your database (maybe even authentication, and storage).

#### Database
Supabase supports PostgreSQL databases. You can either create a new database or connect to an existing one.

To create a new database, click on the "Database" tab in your project dashboard (it's on the left), then click on "Create database". Follow the instructions to create a new PostgreSQL database.

#### Authentication
Supabase provides authentication out of the box. You can either use Supabase's authentication or integrate with a third-party authentication provider.

To use Supabase's authentication, click on the "Authentication" tab in your project dashboard, then click on "Enable authentication". Follow the instructions to set up your authentication.

To integrate with a third-party authentication provider, click on the "Authentication" tab in your project dashboard, then click on "Add provider". Follow the instructions to integrate with your provider.

#### Storage
Supabase provides storage for your files. You can either use Supabase's storage or integrate with a third-party storage provider.

To use Supabase's storage, click on the "Storage" tab in your project dashboard, then click on "Enable storage". Follow the instructions to set up your storage.

To integrate with a third-party storage provider, click on the "Storage" tab in your project dashboard, then click on "Add provider". Follow the instructions to integrate with your provider.

### Step 3: Use Supabase in Your Application
Once you have configured your project, you can use Supabase in your application. Supabase provides client libraries for several programming languages, including JavaScript, TypeScript, Python, and Go.

To use Supabase in your JavaScript or TypeScript application, you can install the @supabase/supabase-js package:

```bash
npm install @supabase/supabase-js
```

Then, you can create a Supabase client by providing your project URL and API key:

> You can find your API details in your API Settings: https://app.supabase.com/project/[PROJECTID]/settings/api
Or you can navigate to "Project Settings" > "API"

```bash
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://your-project-url.supabase.co'
const supabaseKey = 'your-api-key'

const supabase = createClient(supabaseUrl, supabaseKey)
```

You can then use the supabase object to interact with your database, authentication, and storage.