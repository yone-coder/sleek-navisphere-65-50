
import { useLanguage } from "@/contexts/LanguageContext";
import { PostCard } from "@/components/posts/PostCard";

const SAMPLE_POSTS = [
  {
    author: {
      name: "John Doe",
      avatar: "https://storage.googleapis.com/a1aa/image/rWAY64MIJg1wsIJTnL7o9_5yPLAJleTdfaOeNl8Xa3Y.jpg"
    },
    timeAgo: "2 hours ago",
    content: "Just had an amazing weekend exploring the mountains! The views were absolutely breathtaking. Nature never ceases to amaze me.",
    image: "https://storage.googleapis.com/a1aa/image/C_ZFJtxQVMULaoSMWvqV0AC40hx-2BGVwnkXIUMyqOw.jpg",
    stats: {
      likes: 1200,
      comments: 234,
      shares: 56
    },
    hashtags: ["weekendvibes", "nature", "adventure"]
  },
  {
    author: {
      name: "Jane Smith",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jane"
    },
    timeAgo: "4 hours ago",
    content: "Just finished my first competitive match! Can't believe how intense it was. Looking forward to more challenges ahead!",
    stats: {
      likes: 843,
      comments: 156,
      shares: 23
    },
    hashtags: ["gaming", "esports", "competitive"]
  },
  {
    author: {
      name: "Mike Johnson",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mike"
    },
    timeAgo: "6 hours ago",
    content: "Check out this amazing play from yesterday's tournament! Still can't believe we pulled it off.",
    image: "https://picsum.photos/seed/gaming/800/400",
    stats: {
      likes: 2100,
      comments: 342,
      shares: 89
    },
    hashtags: ["highlight", "progaming", "clutch"]
  }
];

export default function Feeds() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen pt-20 animate-fade-in">
      <h1 className="text-4xl font-bold mb-8">{t('nav.feeds')}</h1>
      
      <div className="flex justify-center mb-6">
        <div className="flex items-center w-full max-w-2xl gap-3">
          <div className="relative">
            <img 
              src="https://storage.googleapis.com/a1aa/image/--ZE9XtXSMls4itu_vT26OfFnb75N-Wpp5WQLWgFujE.jpg" 
              alt="Profile picture of a person"
              className="w-10 h-10 rounded-full object-cover"
              width="40"
              height="40"
            />
            <span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full ring-2 ring-white bg-green-500"></span>
          </div>
          
          <div className="flex-1 flex items-center justify-between bg-gray-100 dark:bg-[#1a1a1a] rounded-full py-3 px-4">
            <span className="text-gray-500 dark:text-gray-400">
              À quoi pensez-vous ?
            </span>
            
            <div className="flex flex-col items-center">
              <div className="w-6 h-6">
                <img 
                  src="/lovable-uploads/9e449bdb-9bc8-4c07-833d-aba77900c9c6.png" 
                  alt="Photo icon"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-gray-500 text-sm">Photo</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="divide-y divide-gray-200 dark:divide-white/10">
        {SAMPLE_POSTS.map((post, index) => (
          <PostCard key={index} {...post} />
        ))}
      </div>
    </div>
  );
}
