/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaDropFolderContentFileHandlerMatchPolicy } from './KalturaDropFolderContentFileHandlerMatchPolicy';
import { KalturaJobData } from './KalturaJobData';
/**
 * @record
 */
export function KalturaDropFolderContentProcessorJobDataArgs() { }
/** @type {?|undefined} */
KalturaDropFolderContentProcessorJobDataArgs.prototype.dropFolderId;
/** @type {?|undefined} */
KalturaDropFolderContentProcessorJobDataArgs.prototype.dropFolderFileIds;
/** @type {?|undefined} */
KalturaDropFolderContentProcessorJobDataArgs.prototype.parsedSlug;
/** @type {?|undefined} */
KalturaDropFolderContentProcessorJobDataArgs.prototype.contentMatchPolicy;
/** @type {?|undefined} */
KalturaDropFolderContentProcessorJobDataArgs.prototype.conversionProfileId;
/** @type {?|undefined} */
KalturaDropFolderContentProcessorJobDataArgs.prototype.parsedUserId;
export class KalturaDropFolderContentProcessorJobData extends KalturaJobData {
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
            objectType: { type: 'c', default: 'KalturaDropFolderContentProcessorJobData' },
            dropFolderId: { type: 'n' },
            dropFolderFileIds: { type: 's' },
            parsedSlug: { type: 's' },
            contentMatchPolicy: { type: 'en', subTypeConstructor: KalturaDropFolderContentFileHandlerMatchPolicy, subType: 'KalturaDropFolderContentFileHandlerMatchPolicy' },
            conversionProfileId: { type: 'n' },
            parsedUserId: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaDropFolderContentProcessorJobData.prototype.dropFolderId;
    /** @type {?} */
    KalturaDropFolderContentProcessorJobData.prototype.dropFolderFileIds;
    /** @type {?} */
    KalturaDropFolderContentProcessorJobData.prototype.parsedSlug;
    /** @type {?} */
    KalturaDropFolderContentProcessorJobData.prototype.contentMatchPolicy;
    /** @type {?} */
    KalturaDropFolderContentProcessorJobData.prototype.conversionProfileId;
    /** @type {?} */
    KalturaDropFolderContentProcessorJobData.prototype.parsedUserId;
}
typesMappingStorage['KalturaDropFolderContentProcessorJobData'] = KalturaDropFolderContentProcessorJobData;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYURyb3BGb2xkZXJDb250ZW50UHJvY2Vzc29ySm9iRGF0YS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYURyb3BGb2xkZXJDb250ZW50UHJvY2Vzc29ySm9iRGF0YS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSw4Q0FBOEMsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQ2xILE9BQU8sRUFBRSxjQUFjLEVBQXNCLE1BQU0sa0JBQWtCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBWXRFLE1BQU0sK0NBQWdELFNBQVEsY0FBYzs7OztJQVN4RSxZQUFZLElBQW9EO1FBRTVELEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNmOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRywwQ0FBMEMsRUFBRTtZQUM3RixZQUFZLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzdCLGlCQUFpQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNsQyxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzNCLGtCQUFrQixFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyw4Q0FBOEMsRUFBRSxPQUFPLEVBQUcsZ0RBQWdELEVBQUU7WUFDckssbUJBQW1CLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3BDLFlBQVksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDcEIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKOzs7Ozs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQywwQ0FBMEMsQ0FBQyxHQUFHLHdDQUF3QyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFEcm9wRm9sZGVyQ29udGVudEZpbGVIYW5kbGVyTWF0Y2hQb2xpY3kgfSBmcm9tICcuL0thbHR1cmFEcm9wRm9sZGVyQ29udGVudEZpbGVIYW5kbGVyTWF0Y2hQb2xpY3knO1xuaW1wb3J0IHsgS2FsdHVyYUpvYkRhdGEsIEthbHR1cmFKb2JEYXRhQXJncyB9IGZyb20gJy4vS2FsdHVyYUpvYkRhdGEnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFEcm9wRm9sZGVyQ29udGVudFByb2Nlc3NvckpvYkRhdGFBcmdzICBleHRlbmRzIEthbHR1cmFKb2JEYXRhQXJncyB7XG4gICAgZHJvcEZvbGRlcklkPyA6IG51bWJlcjtcblx0ZHJvcEZvbGRlckZpbGVJZHM/IDogc3RyaW5nO1xuXHRwYXJzZWRTbHVnPyA6IHN0cmluZztcblx0Y29udGVudE1hdGNoUG9saWN5PyA6IEthbHR1cmFEcm9wRm9sZGVyQ29udGVudEZpbGVIYW5kbGVyTWF0Y2hQb2xpY3k7XG5cdGNvbnZlcnNpb25Qcm9maWxlSWQ/IDogbnVtYmVyO1xuXHRwYXJzZWRVc2VySWQ/IDogc3RyaW5nO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhRHJvcEZvbGRlckNvbnRlbnRQcm9jZXNzb3JKb2JEYXRhIGV4dGVuZHMgS2FsdHVyYUpvYkRhdGEge1xuXG4gICAgZHJvcEZvbGRlcklkIDogbnVtYmVyO1xuXHRkcm9wRm9sZGVyRmlsZUlkcyA6IHN0cmluZztcblx0cGFyc2VkU2x1ZyA6IHN0cmluZztcblx0Y29udGVudE1hdGNoUG9saWN5IDogS2FsdHVyYURyb3BGb2xkZXJDb250ZW50RmlsZUhhbmRsZXJNYXRjaFBvbGljeTtcblx0Y29udmVyc2lvblByb2ZpbGVJZCA6IG51bWJlcjtcblx0cGFyc2VkVXNlcklkIDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhRHJvcEZvbGRlckNvbnRlbnRQcm9jZXNzb3JKb2JEYXRhQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFEcm9wRm9sZGVyQ29udGVudFByb2Nlc3NvckpvYkRhdGEnIH0sXG5cdFx0XHRcdGRyb3BGb2xkZXJJZCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRkcm9wRm9sZGVyRmlsZUlkcyA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRwYXJzZWRTbHVnIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGNvbnRlbnRNYXRjaFBvbGljeSA6IHsgdHlwZSA6ICdlbicsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFEcm9wRm9sZGVyQ29udGVudEZpbGVIYW5kbGVyTWF0Y2hQb2xpY3ksIHN1YlR5cGUgOiAnS2FsdHVyYURyb3BGb2xkZXJDb250ZW50RmlsZUhhbmRsZXJNYXRjaFBvbGljeScgfSxcblx0XHRcdFx0Y29udmVyc2lvblByb2ZpbGVJZCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRwYXJzZWRVc2VySWQgOiB7IHR5cGUgOiAncycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYURyb3BGb2xkZXJDb250ZW50UHJvY2Vzc29ySm9iRGF0YSddID0gS2FsdHVyYURyb3BGb2xkZXJDb250ZW50UHJvY2Vzc29ySm9iRGF0YTsiXX0=