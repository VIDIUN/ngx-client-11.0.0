/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaDurationType } from './KalturaDurationType';
import { KalturaBaseEntry } from './KalturaBaseEntry';
/**
 * @record
 */
export function KalturaPlayableEntryArgs() { }
/** @type {?|undefined} */
KalturaPlayableEntryArgs.prototype.msDuration;
var KalturaPlayableEntry = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaPlayableEntry, _super);
    function KalturaPlayableEntry(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaPlayableEntry.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
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
    };
    return KalturaPlayableEntry;
}(KalturaBaseEntry));
export { KalturaPlayableEntry };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVBsYXlhYmxlRW50cnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFQbGF5YWJsZUVudHJ5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzVELE9BQU8sRUFBRSxnQkFBZ0IsRUFBd0IsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7OztBQU81RSxJQUFBO0lBQTBDLGdEQUFnQjtJQVd0RCw4QkFBWSxJQUFnQztlQUV4QyxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLDJDQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLHNCQUFzQixFQUFFO1lBQ3pFLEtBQUssRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtZQUN2QyxLQUFLLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7WUFDdkMsWUFBWSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFO1lBQzlDLEtBQUssRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtZQUN2QyxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7WUFDeEMsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFO1lBQzFDLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDM0IsWUFBWSxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLG1CQUFtQixFQUFFLE9BQU8sRUFBRyxxQkFBcUIsRUFBRTtTQUNqSCxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCOytCQTVDTDtFQVUwQyxnQkFBZ0IsRUFtQ3pELENBQUE7QUFuQ0QsZ0NBbUNDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsc0JBQXNCLENBQUMsR0FBRyxvQkFBb0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhRHVyYXRpb25UeXBlIH0gZnJvbSAnLi9LYWx0dXJhRHVyYXRpb25UeXBlJztcbmltcG9ydCB7IEthbHR1cmFCYXNlRW50cnksIEthbHR1cmFCYXNlRW50cnlBcmdzIH0gZnJvbSAnLi9LYWx0dXJhQmFzZUVudHJ5JztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhUGxheWFibGVFbnRyeUFyZ3MgIGV4dGVuZHMgS2FsdHVyYUJhc2VFbnRyeUFyZ3Mge1xuICAgIG1zRHVyYXRpb24/IDogbnVtYmVyO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhUGxheWFibGVFbnRyeSBleHRlbmRzIEthbHR1cmFCYXNlRW50cnkge1xuXG4gICAgcmVhZG9ubHkgcGxheXMgOiBudW1iZXI7XG5cdHJlYWRvbmx5IHZpZXdzIDogbnVtYmVyO1xuXHRyZWFkb25seSBsYXN0UGxheWVkQXQgOiBEYXRlO1xuXHRyZWFkb25seSB3aWR0aCA6IG51bWJlcjtcblx0cmVhZG9ubHkgaGVpZ2h0IDogbnVtYmVyO1xuXHRyZWFkb25seSBkdXJhdGlvbiA6IG51bWJlcjtcblx0bXNEdXJhdGlvbiA6IG51bWJlcjtcblx0cmVhZG9ubHkgZHVyYXRpb25UeXBlIDogS2FsdHVyYUR1cmF0aW9uVHlwZTtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYVBsYXlhYmxlRW50cnlBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYVBsYXlhYmxlRW50cnknIH0sXG5cdFx0XHRcdHBsYXlzIDogeyB0eXBlIDogJ24nLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0dmlld3MgOiB7IHR5cGUgOiAnbicsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHRsYXN0UGxheWVkQXQgOiB7IHR5cGUgOiAnZCcsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHR3aWR0aCA6IHsgdHlwZSA6ICduJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdGhlaWdodCA6IHsgdHlwZSA6ICduJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdGR1cmF0aW9uIDogeyB0eXBlIDogJ24nLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0bXNEdXJhdGlvbiA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRkdXJhdGlvblR5cGUgOiB7IHR5cGUgOiAnZXMnLCByZWFkT25seSA6IHRydWUsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFEdXJhdGlvblR5cGUsIHN1YlR5cGUgOiAnS2FsdHVyYUR1cmF0aW9uVHlwZScgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYVBsYXlhYmxlRW50cnknXSA9IEthbHR1cmFQbGF5YWJsZUVudHJ5OyJdfQ==