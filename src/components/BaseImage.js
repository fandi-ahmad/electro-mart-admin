import React, { useState, useEffect } from 'react';

export const BaseImage = ({ imageUrl, token }) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [imageData, setImageData] = useState(null);

    useEffect(() => {
        const fetchImage = async () => {
            try {
                const headers = { 'Authorization': localStorage.getItem('userToken') }

                const response = await fetch(imageUrl, {
                    headers: {
                        Authorization: `bearer ${token}`,
                    },
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                // console.log(response.url)

                const blob = await response.blob();
                // setImageData(URL.createObjectURL(blob));
                setImageData(response.url);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching image:', error);
                setError(true);
            }
        };

        fetchImage();
    }, [imageUrl, token]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error loading image.</p>;
    }

    return <img className='w-32 rounded-md' src={imageData} alt="Image" />;
}