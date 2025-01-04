import { Game, games, GameCategory } from "@/config/sprunkigame"
import Link from "next/link"
import { FallbackImage } from "@/components/ui/fallback-image"

interface GamesSidebarProps {
  currentGameId: string;
  gameCategories: GameCategory[];
  limit?: number;
}

export function GamesSidebar({ currentGameId, gameCategories, limit = 12 }: GamesSidebarProps) {
  // 获取当前游戏
  const currentGame = games.find(g => g.id === currentGameId);

  // 直接按创建时间排序所有游戏
  const sortedGames = games
    .filter(game => game.id !== currentGameId) // 只过滤掉当前游戏
    .sort((a, b) => {
      // 按创建时间降序排序（最新的在前面）
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    })
    .slice(0, limit); // 限制数量

  return (
    <aside className="w-full space-y-6 md:px-4">
      {/* 游戏列表 - 5列3行网格布局 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {sortedGames.map((game) => (
          <Link 
            key={game.id}
            href={`/${game.id}`}
            className="group block"
          >
            <div className="bg-card/80 backdrop-blur-sm rounded-2xl border border-border overflow-hidden transition-all hover:shadow-game">
              <div className="relative">
                {/* 游戏图片容器 */}
                <div className="aspect-[4/3] relative overflow-hidden">
                  <FallbackImage
                    src={game.image}
                    alt={game.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  {/* Popular 标签 */}
                  <div className="absolute top-2 right-2 px-3 py-1 text-sm font-medium bg-red-500 text-primary-foreground rounded-full">
                    Hot
                  </div>
                </div>

                {/* 标题和按钮容器 */}
                <div className="relative h-[60px]">
                  {/* 标题层 */}
                  <div className="absolute inset-x-0 p-3 bg-card/95 transition-transform duration-300 ease-out ">
                    <h3 className="font-heading text-foreground text-sm text-center line-clamp-1">
                      {game.title}
                    </h3>
                  </div>

                  {/* Play Now 按钮层 */}
                  <div className="absolute inset-x-0 bottom-0 p-3 bg-card/95 transition-transform duration-300 ease-out translate-y-full group-hover:translate-y-0">
                    <div className="flex justify-center">
                      <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full text-sm font-medium shadow-sm transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                          <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                        </svg>
                        Play Now
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </aside>
  )
} 