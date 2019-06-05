/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaDurationType } from './KalturaDurationType';
import { KalturaBaseEntry } from './KalturaBaseEntry';
/**
 * @record
 */
export function KalturaPlayableEntryArgs() { }
/** @type {?|undefined} */
KalturaPlayableEntryArgs.prototype.msDuration;
export class KalturaPlayableEntry extends KalturaBaseEntry {
    /**
     * @param {?=} data
     */
    constructor(data) {
        super(data);
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaPlayableEntry' },
            plays: { type: 'n', readOnly: true },
            views: { type: 'n', readOnly: true },
            lastPlayedAt: { type: 'd', readOnly: true },
            width: { type: 'n', readOnly: true },
            height: { type: 'n', readOnly: true },
            duration: { type: 'n', readOnly: true },
            msDuration: { type: 'n' },
            durationType: { type: 'es', readOnly: true, subTypeConstructor: KalturaDurationType, subType: 'KalturaDurationType' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaPlayableEntry.prototype.plays;
    /** @type {?} */
    KalturaPlayableEntry.prototype.views;
    /** @type {?} */
    KalturaPlayableEntry.prototype.lastPlayedAt;
    /** @type {?} */
    KalturaPlayableEntry.prototype.width;
    /** @type {?} */
    KalturaPlayableEntry.prototype.height;
    /** @type {?} */
    KalturaPlayableEntry.prototype.duration;
    /** @type {?} */
    KalturaPlayableEntry.prototype.msDuration;
    /** @type {?} */
    KalturaPlayableEntry.prototype.durationType;
}
typesMappingStorage['KalturaPlayableEntry'] = KalturaPlayableEntry;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVBsYXlhYmxlRW50cnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFQbGF5YWJsZUVudHJ5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGdCQUFnQixFQUF3QixNQUFNLG9CQUFvQixDQUFDOzs7Ozs7O0FBTzVFLE1BQU0sMkJBQTRCLFNBQVEsZ0JBQWdCOzs7O0lBV3RELFlBQVksSUFBZ0M7UUFFeEMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2Y7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLHNCQUFzQixFQUFFO1lBQ3pFLEtBQUssRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtZQUN2QyxLQUFLLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7WUFDdkMsWUFBWSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFO1lBQzlDLEtBQUssRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtZQUN2QyxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7WUFDeEMsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFO1lBQzFDLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDM0IsWUFBWSxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLG1CQUFtQixFQUFFLE9BQU8sRUFBRyxxQkFBcUIsRUFBRTtTQUNqSCxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0o7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyxzQkFBc0IsQ0FBQyxHQUFHLG9CQUFvQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFEdXJhdGlvblR5cGUgfSBmcm9tICcuL0thbHR1cmFEdXJhdGlvblR5cGUnO1xuaW1wb3J0IHsgS2FsdHVyYUJhc2VFbnRyeSwgS2FsdHVyYUJhc2VFbnRyeUFyZ3MgfSBmcm9tICcuL0thbHR1cmFCYXNlRW50cnknO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFQbGF5YWJsZUVudHJ5QXJncyAgZXh0ZW5kcyBLYWx0dXJhQmFzZUVudHJ5QXJncyB7XG4gICAgbXNEdXJhdGlvbj8gOiBudW1iZXI7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFQbGF5YWJsZUVudHJ5IGV4dGVuZHMgS2FsdHVyYUJhc2VFbnRyeSB7XG5cbiAgICByZWFkb25seSBwbGF5cyA6IG51bWJlcjtcblx0cmVhZG9ubHkgdmlld3MgOiBudW1iZXI7XG5cdHJlYWRvbmx5IGxhc3RQbGF5ZWRBdCA6IERhdGU7XG5cdHJlYWRvbmx5IHdpZHRoIDogbnVtYmVyO1xuXHRyZWFkb25seSBoZWlnaHQgOiBudW1iZXI7XG5cdHJlYWRvbmx5IGR1cmF0aW9uIDogbnVtYmVyO1xuXHRtc0R1cmF0aW9uIDogbnVtYmVyO1xuXHRyZWFkb25seSBkdXJhdGlvblR5cGUgOiBLYWx0dXJhRHVyYXRpb25UeXBlO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhUGxheWFibGVFbnRyeUFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhUGxheWFibGVFbnRyeScgfSxcblx0XHRcdFx0cGxheXMgOiB7IHR5cGUgOiAnbicsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHR2aWV3cyA6IHsgdHlwZSA6ICduJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdGxhc3RQbGF5ZWRBdCA6IHsgdHlwZSA6ICdkJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdHdpZHRoIDogeyB0eXBlIDogJ24nLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0aGVpZ2h0IDogeyB0eXBlIDogJ24nLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0ZHVyYXRpb24gOiB7IHR5cGUgOiAnbicsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHRtc0R1cmF0aW9uIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGR1cmF0aW9uVHlwZSA6IHsgdHlwZSA6ICdlcycsIHJlYWRPbmx5IDogdHJ1ZSwgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUR1cmF0aW9uVHlwZSwgc3ViVHlwZSA6ICdLYWx0dXJhRHVyYXRpb25UeXBlJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhUGxheWFibGVFbnRyeSddID0gS2FsdHVyYVBsYXlhYmxlRW50cnk7Il19