import React from 'react';
import { Database, UploadCloud, Code2 } from 'lucide-react';

export const DatasetsPage: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-purple-900/40 bg-purple-950/60 dark:bg-[#13031f]/60 backdrop-blur-md p-6 shadow-xl text-white">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-purple-800/50 text-purple-300 flex items-center justify-center border border-purple-600/30">
            <Database className="h-5 w-5" />
          </div>
          <div>
            <h2 className="text-base font-bold font-outfit text-white">
              Dataset Ingestion & Data Quality Explorer
            </h2>
            <p className="text-xs text-purple-200/70">
              Upload CSV, XLSX, Parquet, or JSON files. Automated column type inference and missingness audits.
            </p>
          </div>
        </div>

        <div className="mt-4 pt-3 border-t border-purple-900/40 flex items-center gap-2 text-xs text-purple-300/60 font-mono">
          <Code2 className="h-3.5 w-3.5 text-purple-400" />
          <span>Assigned to: Developer B · Code location: </span>
          <code className="text-purple-200 font-bold bg-purple-900/60 px-2 py-0.5 rounded border border-purple-700/40">
            src/pages/DatasetsPage.tsx
          </code>
        </div>
      </div>

      {/* Upload Zone */}
      <div className="h-52 border-2 border-dashed border-purple-800/60 hover:border-purple-500/80 rounded-2xl flex flex-col items-center justify-center gap-3 bg-purple-950/30 dark:bg-[#13031f]/30 text-purple-200/70 text-xs transition cursor-pointer">
        <div className="h-12 w-12 rounded-full bg-purple-900/50 flex items-center justify-center border border-purple-600/30">
          <UploadCloud className="h-6 w-6 text-purple-300" />
        </div>
        <span className="font-medium text-sm text-purple-100">Drag & drop CSV or Parquet files here to upload</span>
        <span className="text-[11px] text-purple-400/60">Supports datasets up to 5GB</span>
      </div>
    </div>
  );
};
