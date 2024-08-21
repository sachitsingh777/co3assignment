import React, { useState, useEffect } from 'react';
import { gql, useMutation, useQuery } from '@apollo/client';
import './App.css';

// GraphQL Queries and Mutations
const GET_COINS = gql`
  query GetCoins($userId: Int!) {
    coins(userId: $userId)
  }
`;

const INCREMENT_COINS = gql`
  mutation IncrementCoins($userId: Int!, $amount: Int!) {
    incrementCoins(userId: $userId, amount: $amount)
  }
`;

function App() {
  const [userId, setUserId] = useState<number | null>(null);
  const { loading, error, data, refetch } = useQuery(GET_COINS, { 
    variables: { userId },
    skip: !userId 
  });
  const [incrementCoins] = useMutation(INCREMENT_COINS);
  const [coins, setCoins] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const totalCoins = 2000; // Assuming total coins needed for progress

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const userIdParam = params.get('userId');
    if (userIdParam) {
      setUserId(parseInt(userIdParam, 10));
    } else {
      console.error('User ID parameter is missing from the URL');
    }
  }, []);

  useEffect(() => {
    if (data) {
      setCoins(data.coins);
    }
  }, [data]);

  if (!userId) {
    return <p>User ID is missing. Please check the URL.</p>;
  }

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const handleClick = async () => {
    if (userId) {
      setIsAnimating(true);
      try {
        const result = await incrementCoins({ variables: { userId, amount: 1 } });
        setCoins(result.data.incrementCoins);
        refetch();
      } catch (error) {
        console.error('Error incrementing coins:', error);
      } finally {
        setIsAnimating(false);
      }
    }
  };

  return (
    <div className="container">
      <div className="header">
        <span className="trophy-icon">🏆</span>
        <span className="title">Master</span>
        <span className="arrow-icon">➤</span>
      </div>
      <div className="coin-container">
        <img src="/coin.png" alt="Coin" className="coin-image" />
      </div>
      <div className="progress-container">
        <div className="progress-bar" style={{ width: `${(coins / totalCoins) * 100}%` }}></div>
      </div>
      <div className="score-container">
        <span className="lightning-icon">⚡</span>
        <span className="score-text">{coins}/{totalCoins}</span>
      </div>
      <button onClick={handleClick} className={`tap-button ${isAnimating ? 'animating' : ''}`}>
        Tap
      </button>
    </div>
  );
}

export default App;
