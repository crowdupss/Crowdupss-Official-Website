import React, { useState } from 'react';
import Footer from '../../Components/Footer/Footer';

// Separate components for each section
const MessagingSection = () => (
  <div>
    {/* Add content for the Messaging section */}
    <h2>Messaging Section</h2>
  </div>
);

const CommunitySection = ({
  posts,
  handleLike,
  handleMessage,
  handleShare,
  handleView,
  handleEdit,
  handleDelete,
  handleFollow,
  handleHide,
  handleSave,
  handleReport,
}) => {
  const [dropdownVisible, setDropdownVisible] = useState(null);
  const [commentInput, setCommentInput] = useState('');

  const toggleDropdown = (postId) => {
    setDropdownVisible((prev) => (prev === postId ? null : postId));
  };

  const handleCommentChange = (e) => {
    setCommentInput(e.target.value);
  };

  const handleCommentPost = (postId) => {
    if (commentInput.trim() !== '') {
      console.log(`Comment on post with id ${postId}: ${commentInput}`);
      // You can add logic to handle comment posting here
      setCommentInput('');
    }
  };

  const handleEditClick = (postId) => {
    toggleDropdown(postId);
    handleEdit(postId);
  };

  const handleDeleteClick = (postId) => {
    toggleDropdown(postId);
    handleDelete(postId);
  };

  const handleFollowClick = (postId) => {
    toggleDropdown(postId);
    handleFollow(postId);
  };

  const handleHideClick = (postId) => {
    toggleDropdown(postId);
    handleHide(postId);
  };

  const handleSaveClick = (postId) => {
    toggleDropdown(postId);
    handleSave(postId);
  };

  const handleReportClick = (postId) => {
    toggleDropdown(postId);
    const reportMessage = prompt('Write your report:');
    if (reportMessage) {
      // You can handle the report message here
      console.log(`Report on post with id ${postId}: ${reportMessage}`);
    }
  };

  return (
    <div>
      {/* Add content for the Community section */}
      <h2>Community Section</h2>
      {/* Render posts */}
      {posts.map((post) => (
        <div key={post.id} className="post relative">
          <div className="post-header">
            <img src={post.profileImage} alt="Profile" className="rounded-full h-8 w-8 mr-2" />
            <span>{post.time}h ago</span>
          </div>
          <p>{post.text}</p>
          <div className="post-actions flex items-center">
            <div
              className={`post-stat ${post.liked ? 'text-red-500' : ''}`}
              onClick={() => handleLike(post.id)}
            >
              <i className="fas fa-heart"></i> {post.likes}
            </div>
            <div className="post-stat" onClick={() => handleMessage(post.id)}>
              <i className="fas fa-envelope"></i>
            </div>
            <div className="post-stat" onClick={() => handleShare(post.id)}>
              <i className="fas fa-share"></i>
            </div>
            <div className="post-stat" onClick={() => handleView(post.id)}>
              <i className="fas fa-eye"></i> {post.views}
            </div>
          </div>
          <div className="post-menu absolute top-0 right-0">
            <div className="dropdown">
              <button className="dropbtn" onClick={() => toggleDropdown(post.id)}>
                <i className="fas fa-ellipsis-h"></i>
              </button>
              {dropdownVisible === post.id && (
                <div className="dropdown-content">
                  <button onClick={() => handleEditClick(post.id)}>Edit</button>
                  <button onClick={() => handleDeleteClick(post.id)}>Delete</button>
                  <button onClick={() => handleFollowClick(post.id)}>Follow</button>
                  <button onClick={() => handleHideClick(post.id)}>Hide</button>
                  <button onClick={() => handleSaveClick(post.id)}>Save</button>
                  <button onClick={() => handleReportClick(post.id)}>Report</button>
                </div>
              )}
            </div>
          </div>
          {/* Comment Section */}
          <div className="comment-section mt-2">
            <input
              type="text"
              placeholder="Write a comment..."
              value={commentInput}
              onChange={handleCommentChange}
              className="border-none p-2 rounded-md w-full"
            />
            <button
              onClick={() => handleCommentPost(post.id)}
              className="bg-blue-500 text-white px-4 py-2 rounded ml-2"
            >
              Post
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

const ResourcesSection = () => (
  <div>
    {/* Add content for the Resources section */}
    <h2>Resources Section</h2>
  </div>
);

const NotificationSection = () => (
  <div>
    {/* Add content for the Notification section */}
    <h2>Notification Section</h2>
  </div>
);

const MVPSection = () => (
  <div>
    {/* Add content for the MVP section */}
    <h2>MVP Section</h2>
  </div>
);

const WritePostSection = ({ handlePost }) => {
  const [postText, setPostText] = useState('');

  const handlePostClick = () => {
    if (postText.trim() !== '') {
      handlePost({
        id: new Date().getTime(),
        text: postText,
        profileImage: 'https://placekitten.com/40/40',
        time: new Date().getHours(),
        likes: 0,
        views: 0,
        liked: false,
      });
      setPostText('');
    }
  };

  return (
    <div className="bg-white p-2 rounded shadow-md mb-2">
      <img
        src="https://placekitten.com/40/40"
        alt="Profile"
        className="rounded-full h-8 w-8 mr-2 cursor-pointer"
      />
      <div className="relative">
        <input
          type="text"
          value={postText}
          onChange={(e) => setPostText(e.target.value)}
          placeholder="Share your thoughts..."
          className="border-none p-2 rounded-md w-full"
        />
        <button
          onClick={handlePostClick}
          className="absolute top-0 right-0 bg-blue-500 text-white px-4 py-2 rounded"
        >
          Post
        </button>
      </div>
    </div>
  );
};

const Community = () => {
  const [activeSection, setActiveSection] = useState('community');
  const [posts, setPosts] = useState([]);

  const handlePost = (post) => {
    setPosts([post, ...posts]);
  };

  const handleLike = (postId) => {
    console.log(`Liked post with id ${postId}`);
    const updatedPosts = posts.map((post) =>
      post.id === postId ? { ...post, liked: !post.liked, likes: post.likes + (post.liked ? -1 : 1) } : post
    );
    setPosts(updatedPosts);
  };

  const handleMessage = (postId) => {
    console.log(`Messaged on post with id ${postId}`);
  };

  const handleShare = (postId) => {
    console.log(`Shared post with id ${postId}`);
    // You can add logic for sharing on social media here
  };

  const handleView = (postId) => {
    console.log(`Viewed post with id ${postId}`);
    const updatedPosts = posts.map((post) =>
      post.id === postId ? { ...post, views: post.views + 1 } : post
    );
    setPosts(updatedPosts);
  };

  const handleEdit = (postId) => {
    console.log(`Editing post with id ${postId}`);
    // You can add logic to handle post editing here
  };

  const handleDelete = (postId) => {
    console.log(`Deleting post with id ${postId}`);
    const updatedPosts = posts.filter((post) => post.id !== postId);
    setPosts(updatedPosts);
  };

  const handleFollow = (postId) => {
    console.log(`Following user from post with id ${postId}`);
    // You can add logic to handle following a user here
  };

  const handleHide = (postId) => {
    console.log(`Hiding post with id ${postId}`);
    // You can add logic to handle hiding a post here
  };

  const handleSave = (postId) => {
    console.log(`Saving post with id ${postId}`);
    // You can add logic to handle saving a post here
  };

  const handleReport = (postId) => {
    console.log(`Reporting post with id ${postId}`);
    // You can add logic to handle reporting a post here
  };

  const handleEditProfile = () => {
    console.log('Editing profile...');
  };

  return (
    <div>
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <a href="/">
            <img
              src="https://media.licdn.com/dms/image/C560BAQFEmJRV-RMTEw/company-logo_200_200/0/1675482910935?e=1708560000&v=beta&t=O2JhBVXCeKoXb3C5dMEI9sYNjZNveZ8W5z3K12mCofo"
              alt="Logo"
              className="h-10 w-10"
            />
          </a>
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="Search for people"
              className="border border-gray-300 p-2 rounded-md w-64"
            />
            <button className="ml-2">Search</button>
          </div>
          <div className="flex space-x-4">
            <div
              className={`text-white cursor-pointer flex items-center ${
                activeSection === 'messaging' && 'font-bold'
              }`}
              onClick={() => setActiveSection('messaging')}
            >
              <i className="fas fa-envelope-open-text text-xl mr-2"></i>
              Messaging
            </div>
            <div
              className={`text-white cursor-pointer flex items-center ${
                activeSection === 'community' && 'font-bold'
              }`}
              onClick={() => setActiveSection('community')}
            >
              <i className="fas fa-users text-xl mr-2"></i>
              Community
            </div>
            <div
              className={`text-white cursor-pointer flex items-center ${
                activeSection === 'resources' && 'font-bold'
              }`}
              onClick={() => setActiveSection('resources')}
            >
              <i className="fas fa-book text-xl mr-2"></i>
              Resources
            </div>
            <div
              className={`text-white cursor-pointer flex items-center ${
                activeSection === 'notification' && 'font-bold'
              }`}
              onClick={() => setActiveSection('notification')}
            >
              <i className="fas fa-bell text-xl mr-2"></i>
              Notification
            </div>
            <div
              className={`text-white cursor-pointer flex items-center ${
                activeSection === 'mvp' && 'font-bold'
              }`}
              onClick={() => setActiveSection('mvp')}
            >
              <i className="fas fa-trophy text-xl mr-2"></i>
              MVP
            </div>
            <div
              className={`text-white cursor-pointer flex items-center ${
                activeSection === 'events' && 'font-bold'
              }`}
              onClick={() => setActiveSection('events')}
            >
              <i className="fas fa-calendar-alt text-xl mr-2"></i>
              Events
            </div>
            <div className="flex items-center" onClick={handleEditProfile}>
              <img
                src="https://placekitten.com/40/40"
                alt="Profile"
                className="rounded-full h-8 w-8 mr-2 cursor-pointer"
              />
              <span className="text-blue-500 cursor-pointer">Profile</span>
            </div>
          </div>
        </div>
      </nav>

      <WritePostSection handlePost={handlePost} />

      <div className="bg-white p-4 rounded shadow-md mb-4">
        {activeSection === 'messaging' && <MessagingSection />}
        {activeSection === 'community' && (
          <CommunitySection
            posts={posts}
            handleLike={handleLike}
            handleMessage={handleMessage}
            handleShare={handleShare}
            handleView={handleView}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
            handleFollow={handleFollow}
            handleHide={handleHide}
            handleSave={handleSave}
            handleReport={handleReport}
          />
        )}
        {activeSection === 'resources' && <ResourcesSection />}
        {activeSection === 'notification' && <NotificationSection />}
        {activeSection === 'mvp' && <MVPSection />}
      </div>
    <Footer />
    </div>
  );
};

export default Community;