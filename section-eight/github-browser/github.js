class GitHub {
    constructor() {
        this.client_id = '93762e6f78c299a55788';
        this.client_secret = 'c8a0ef81279b2e0685281022f6978506ef2f3a24';
        this.github_user_url = 'https://api.github.com/users/';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user) {
        const profileResponse = await fetch(`${this.github_user_url}${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repoResponse = await fetch(`${this.github_user_url}${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();
        const repos = await repoResponse.json();

        return {
            profile,
            repos
        }
    }
    
}