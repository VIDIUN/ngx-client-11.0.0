/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaCoordinate } from './KalturaCoordinate';
import { KalturaEntryLiveStats } from './KalturaEntryLiveStats';
/**
 * @record
 */
export function KalturaGeoTimeLiveStatsArgs() { }
/** @type {?|undefined} */
KalturaGeoTimeLiveStatsArgs.prototype.city;
/** @type {?|undefined} */
KalturaGeoTimeLiveStatsArgs.prototype.country;
export class KalturaGeoTimeLiveStats extends KalturaEntryLiveStats {
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
            objectType: { type: 'c', default: 'KalturaGeoTimeLiveStats' },
            city: { type: 'o', subTypeConstructor: KalturaCoordinate, subType: 'KalturaCoordinate' },
            country: { type: 'o', subTypeConstructor: KalturaCoordinate, subType: 'KalturaCoordinate' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaGeoTimeLiveStats.prototype.city;
    /** @type {?} */
    KalturaGeoTimeLiveStats.prototype.country;
}
typesMappingStorage['KalturaGeoTimeLiveStats'] = KalturaGeoTimeLiveStats;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUdlb1RpbWVMaXZlU3RhdHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFHZW9UaW1lTGl2ZVN0YXRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDeEQsT0FBTyxFQUFFLHFCQUFxQixFQUE2QixNQUFNLHlCQUF5QixDQUFDOzs7Ozs7Ozs7QUFRM0YsTUFBTSw4QkFBK0IsU0FBUSxxQkFBcUI7Ozs7SUFLOUQsWUFBWSxJQUFtQztRQUUzQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDZjs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcseUJBQXlCLEVBQUU7WUFDNUUsSUFBSSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyxpQkFBaUIsRUFBRSxPQUFPLEVBQUcsbUJBQW1CLEVBQUU7WUFDNUYsT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyxpQkFBaUIsRUFBRSxPQUFPLEVBQUcsbUJBQW1CLEVBQUU7U0FDdEYsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKOzs7Ozs7O0FBRUQsbUJBQW1CLENBQUMseUJBQXlCLENBQUMsR0FBRyx1QkFBdUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhQ29vcmRpbmF0ZSB9IGZyb20gJy4vS2FsdHVyYUNvb3JkaW5hdGUnO1xuaW1wb3J0IHsgS2FsdHVyYUVudHJ5TGl2ZVN0YXRzLCBLYWx0dXJhRW50cnlMaXZlU3RhdHNBcmdzIH0gZnJvbSAnLi9LYWx0dXJhRW50cnlMaXZlU3RhdHMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFHZW9UaW1lTGl2ZVN0YXRzQXJncyAgZXh0ZW5kcyBLYWx0dXJhRW50cnlMaXZlU3RhdHNBcmdzIHtcbiAgICBjaXR5PyA6IEthbHR1cmFDb29yZGluYXRlO1xuXHRjb3VudHJ5PyA6IEthbHR1cmFDb29yZGluYXRlO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhR2VvVGltZUxpdmVTdGF0cyBleHRlbmRzIEthbHR1cmFFbnRyeUxpdmVTdGF0cyB7XG5cbiAgICBjaXR5IDogS2FsdHVyYUNvb3JkaW5hdGU7XG5cdGNvdW50cnkgOiBLYWx0dXJhQ29vcmRpbmF0ZTtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUdlb1RpbWVMaXZlU3RhdHNBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUdlb1RpbWVMaXZlU3RhdHMnIH0sXG5cdFx0XHRcdGNpdHkgOiB7IHR5cGUgOiAnbycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFDb29yZGluYXRlLCBzdWJUeXBlIDogJ0thbHR1cmFDb29yZGluYXRlJyB9LFxuXHRcdFx0XHRjb3VudHJ5IDogeyB0eXBlIDogJ28nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhQ29vcmRpbmF0ZSwgc3ViVHlwZSA6ICdLYWx0dXJhQ29vcmRpbmF0ZScgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUdlb1RpbWVMaXZlU3RhdHMnXSA9IEthbHR1cmFHZW9UaW1lTGl2ZVN0YXRzOyJdfQ==