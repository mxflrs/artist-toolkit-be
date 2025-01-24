import { Injectable } from "@nestjs/common";
import { ISpace } from "src/domain/interfaces/space.interface";
import { supabase } from "src/infrastructure/database/supabase-client";
import { SpaceDto } from "src/presentation/dtos/space.dto";

@Injectable()
export class SpaceRepository {
     async save(subtopic: SpaceDto): Promise<ISpace | null> {
        const { data, error } = await supabase
          .from('spaces')
          .insert(subtopic)
          .select();
    
        if (error) throw new Error(`Failed to save subtopic ${error}`);
        return data[0] || null;
      }
    
      async getAll(): Promise<ISpace[] | null> {
        const { data, error } = await supabase.from('spaces').select('*');
    
        if (error) throw new Error(`Failed to fetch suptopics`);
        return data || null;
      }
    
      async getById(subtopicId: number): Promise<ISpace | null> {
        const { data, error } = await supabase
          .from('spaces')
          .select('*')
          .eq('id', subtopicId)
          .single();
    
        if (error) throw new Error(`Failed to fetch topic with id ${subtopicId}`);
        return data || null;
      }
    
      async update(subtopic: SpaceDto): Promise<ISpace | null> {
        const { data, error } = await supabase
          .from('spaces')
          .update({
            ...subtopic,
            updated_at: new Date().toISOString(),
          })
          .eq('id', subtopic.id)
          .select()
          .single();
    
        if (error) throw new Error(`Failed update topic ${error}`);
        return data || null;
      }
    
      async delete(subtopicId: number) {
        const { error } = await supabase
          .from('spaces')
          .delete()
          .eq('id', subtopicId);
        if (error) throw new Error(`Failed save user ${error}`);
        return subtopicId;
      }
}