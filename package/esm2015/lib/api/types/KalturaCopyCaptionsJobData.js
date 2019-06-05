/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaClipDescription } from './KalturaClipDescription';
import { KalturaJobData } from './KalturaJobData';
/**
 * @record
 */
export function KalturaCopyCaptionsJobDataArgs() { }
/** @type {?|undefined} */
KalturaCopyCaptionsJobDataArgs.prototype.entryId;
/** @type {?|undefined} */
KalturaCopyCaptionsJobDataArgs.prototype.clipsDescriptionArray;
/** @type {?|undefined} */
KalturaCopyCaptionsJobDataArgs.prototype.fullCopy;
export class KalturaCopyCaptionsJobData extends KalturaJobData {
    /**
     * @param {?=} data
     */
    constructor(data) {
        super(data);
        if (typeof this.clipsDescriptionArray === 'undefined')
            this.clipsDescriptionArray = [];
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaCopyCaptionsJobData' },
            entryId: { type: 's' },
            clipsDescriptionArray: { type: 'a', subTypeConstructor: KalturaClipDescription, subType: 'KalturaClipDescription' },
            fullCopy: { type: 'b' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaCopyCaptionsJobData.prototype.entryId;
    /** @type {?} */
    KalturaCopyCaptionsJobData.prototype.clipsDescriptionArray;
    /** @type {?} */
    KalturaCopyCaptionsJobData.prototype.fullCopy;
}
typesMappingStorage['KalturaCopyCaptionsJobData'] = KalturaCopyCaptionsJobData;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUNvcHlDYXB0aW9uc0pvYkRhdGEuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFDb3B5Q2FwdGlvbnNKb2JEYXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGNBQWMsRUFBc0IsTUFBTSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7Ozs7QUFTdEUsTUFBTSxpQ0FBa0MsU0FBUSxjQUFjOzs7O0lBTTFELFlBQVksSUFBc0M7UUFFOUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ1osRUFBRSxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMscUJBQXFCLEtBQUssV0FBVyxDQUFDO1lBQUMsSUFBSSxDQUFDLHFCQUFxQixHQUFHLEVBQUUsQ0FBQztLQUMxRjs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsNEJBQTRCLEVBQUU7WUFDL0UsT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN4QixxQkFBcUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsc0JBQXNCLEVBQUUsT0FBTyxFQUFHLHdCQUF3QixFQUFFO1lBQ3ZILFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDaEIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKOzs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyw0QkFBNEIsQ0FBQyxHQUFHLDBCQUEwQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFDbGlwRGVzY3JpcHRpb24gfSBmcm9tICcuL0thbHR1cmFDbGlwRGVzY3JpcHRpb24nO1xuaW1wb3J0IHsgS2FsdHVyYUpvYkRhdGEsIEthbHR1cmFKb2JEYXRhQXJncyB9IGZyb20gJy4vS2FsdHVyYUpvYkRhdGEnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFDb3B5Q2FwdGlvbnNKb2JEYXRhQXJncyAgZXh0ZW5kcyBLYWx0dXJhSm9iRGF0YUFyZ3Mge1xuICAgIGVudHJ5SWQ/IDogc3RyaW5nO1xuXHRjbGlwc0Rlc2NyaXB0aW9uQXJyYXk/IDogS2FsdHVyYUNsaXBEZXNjcmlwdGlvbltdO1xuXHRmdWxsQ29weT8gOiBib29sZWFuO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhQ29weUNhcHRpb25zSm9iRGF0YSBleHRlbmRzIEthbHR1cmFKb2JEYXRhIHtcblxuICAgIGVudHJ5SWQgOiBzdHJpbmc7XG5cdGNsaXBzRGVzY3JpcHRpb25BcnJheSA6IEthbHR1cmFDbGlwRGVzY3JpcHRpb25bXTtcblx0ZnVsbENvcHkgOiBib29sZWFuO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhQ29weUNhcHRpb25zSm9iRGF0YUFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmNsaXBzRGVzY3JpcHRpb25BcnJheSA9PT0gJ3VuZGVmaW5lZCcpIHRoaXMuY2xpcHNEZXNjcmlwdGlvbkFycmF5ID0gW107XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUNvcHlDYXB0aW9uc0pvYkRhdGEnIH0sXG5cdFx0XHRcdGVudHJ5SWQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0Y2xpcHNEZXNjcmlwdGlvbkFycmF5IDogeyB0eXBlIDogJ2EnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhQ2xpcERlc2NyaXB0aW9uLCBzdWJUeXBlIDogJ0thbHR1cmFDbGlwRGVzY3JpcHRpb24nIH0sXG5cdFx0XHRcdGZ1bGxDb3B5IDogeyB0eXBlIDogJ2InIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFDb3B5Q2FwdGlvbnNKb2JEYXRhJ10gPSBLYWx0dXJhQ29weUNhcHRpb25zSm9iRGF0YTsiXX0=