import React from 'react';
import Image from 'next/image'
const style = {
    wrapper: `relative`,
    container: `before:content-[''] before:bg-red-500 before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-[url('https://lh3.googleusercontent.com/jSniiLwosYg4YNa5ZJg4S115fP-vZ570m5Mrup117XaGUKiN2VW_vK4tYPXmaYJ1ku3pQqeMNdZWdXAvCXpH6QAckALelFdTGtgcDbY=s550')] before:bg-cover before:bg-center before:opacity-30 before:blur`,
    contentWrapper: `flex h-screen relative justify-center flex-wrap items-center`,
    copyContainer: `w-1/2`,
    title: `relaitve text-white text-[46px] font-semibold`,
    description: `text-[#8a939b] container-[400px] text-2xl mt-[0.8rem] mb-[2.5rem]`,
    ctaContainer: `flex`,
    accentedButton: `relative text-lg font-semibold px-12 py-4 bg-[#2181e2] rounded-lg mr-5 text-white hover:bg-[#42a0ff] cursor-pointer`,
    button: `relative text-lg font-semibold px-12 py-4 bg-[#363840] rounded-lg mr-5 text-[#e4e8ea] hover:bg-[#4c505c]  cursor-pointer`,
    cardContainer: `rounded-[3rem]`,
    infoContainer: `h-20  bg-[#313338] p-4 rounded-b-lg flex items-center text-white`,
    author: `flex flex-col justify-center ml-4`,
    name: ``,
    infoIcon: `flex justify-end items-center flex-1 text-[#8a939b] text-3xl font-bold`,
}
function Hero() {
    return <div className={style.wrapper}>
        <div className={style.container}>
            <div className={style.contentWrapper}>
                <div className={style.copyContainer}>
                    <div className={style.title}>
                        Discover, collect, and sell extraordinary NFTs
                    </div>
                    <div className={style.description}>
                        Opensea is the world&apos;s first and largest NFT marketplace
                    </div>
                    <div className={style.ctaContainer}>
                        <button className={style.accentedButton}>Explore</button>
                        <button className={style.button}>Create</button>
                    </div>
                </div>
                <div className={style.cardContainer}>
                    <img className='rounded-t-lg' src="https://lh3.googleusercontent.com/jSniiLwosYg4YNa5ZJg4S115fP-vZ570m5Mrup117XaGUKiN2VW_vK4tYPXmaYJ1ku3pQqeMNdZWdXAvCXpH6QAckALelFdTGtgcDbY=s550" alt="" />
                    <div className={style.infoContainer}>
                        <img
                            className='h-[2.25] rounded-full'
                            src="https://lh3.googleusercontent.com/MYDjwlZ_rxhumkrTO9izc3QgY8O35aDG9X4UpFTjzMugQenX5hybVWgPZaXGtHI86BV5bqjrlQNH_NX_lSDtC6N7_5KtoY-_Eb5H=s80"
                            alt=''
                        />
                        <div className={style.author}>
                            <div className={style.name}>Carson Rodrigues</div>
                            <a
                                className='text-[#1868b7]'
                                href='https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/26959255439957110233077989937802681477686360662735004345703791624424112783361'
                            >
                                marz
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>;
}

export default Hero;