import React from 'react'

const User = ({ user }) => {

    const { avatar_url, followers, following, public_repos, login, created_at } = user

    const createdDate = new Date(created_at)

    return (
        <div>
            <div>
                <img src={avatar_url} alt="User" />
            </div>
            <div>
                <a href={`https://github.com/${login}`}>{name || login}</a>
                <p>User joined at {`${createdDate.getDate()} ${createdDate.toLocaleString('en-us', {
                    month: 'short'
                })}${createdDate.getFullYear()}`}</p>
            </div>
            <div>
                <p>Public Repos</p>
                <p>{public_repos}</p>
            </div>
            <div>
                <p>Followers</p>
                <p>{followers}</p>
            </div>
            <div>
                <p>Following</p>
                <p>{following}</p>
            </div>
        </div>

    )
}

export default User
